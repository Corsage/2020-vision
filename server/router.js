const Dashboard = require('./controllers/dashboard');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('hello world');
    });
    app.get('/dashboard', Dashboard.onload);
    app.post('/alert', Dashboard.alert);
}