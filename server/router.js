const Dashboard = require('./controllers/dashboard');
const { exec } = require('child_process');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('hello world');
    });
    
    app.get('/runCV', function(req, res) {
        console.log(__filename);
        
        exec('python /home/ec2-user/environment/2020-vision/opencv/run.py --prototxt mobilenet_ssd/MobileNetSSD_deploy.prototxt --model mobilenet_ssd/MobileNetSSD_deploy.caffemodel --input /home/ec2-user/environment/2020-vision/opencv/videos/example_01.mp4', (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                console.log("failed");
                console.log(err);
                res.send("failed");
                return;

            }
            res.send("passed");
            
            // the *entire* stdout and stderr (buffered)
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    });
    
    app.get('/dashboard', Dashboard.onload);
    
    // Small Stat route calls 
    app.get('/getEntranceRateData', Dashboard.getEntranceRateData);
    app.get('/getExitRateData', Dashboard.getExitRateData);
    app.get('/getAverageCustomersRateData', Dashboard.getAverageCustomersRateData);
    app.get('/getAverageCapacityRateData', Dashboard.getAverageCapacityRateData);
    
    // Double bar-graph over day in-flow/out-flow data call
    app.get('/getDailyFlowData', Dashboard.getDailyInflowData);

    // Today's Capacity graph call
    app.get('/getDailyCapacityData', Dashboard.getDailyCapacityData);

    // People density graph call
    app.get('/getDensityData', Dashboard.getPeopleDensityData);

    // Covid Ticker Data call
    app.get('/getCovidTickerData', Dashboard.getCovidTickerData)
    
    app.post('/alert', Dashboard.alert);
   
    
    
}