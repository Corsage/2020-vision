// test functions from different routes 
exports.onload = function(req, res) {
	res.send({ data: "dummy data" });	
};

exports.alert = function(req, res) {
	res.send({ data: "Maximum number of people in business."})
}

// Small Stat Data Functions 
exports.getEntranceRateData = function(req, res) {
	let returnData = {currentAverageValue: 20, percentage: 0.09, x_axis: [1,2,3], y_axis: [4,5,6]};
	res.send(returnData);
}

exports.getExitRateData = function(req, res) {
	let returnData = {currentAverageValue: 25, percentage: 0.10, x_axis: [1,2,3], y_axis: [4,5,6]};
	res.send(returnData);
}

exports.getAverageCustomersRateData = function(req, res) {
	let returnData = {currentAverageValue: 500, percentage: -0.30, x_axis: [1,2,3], y_axis: [300,400,750]};
	res.send(returnData);
}

exports.getAverageCapacityRateData = function(req, res) {
	let returnData = {currentAverageValue: 65, percentage: 0.20, x_axis: [1,2,3], y_axis: [60,70,85]};
	res.send(returnData);
}

// Double bar-graph over day in-flow/outflow Functions
exports.getDailyInflowData = function(req, res) {
	let chartTimeLabels = [];

	for (var x = 1; x < 25; x++) {
	    const date = new Date(2020, 11, 21, x, 0, 0, 0);
	    const dateStringTemp = date.getHours();
	    let dateString = '';
	    if(dateStringTemp % 12 === 0) {
	        dateString += 12
	    } else dateString += dateStringTemp % 12
	
	    if(dateStringTemp < 12) dateString += ' AM'
	    else dateString += ' PM'
	    
	    chartTimeLabels.push(dateString);
	}
	let yAxis1Data = [];
	let yAxis2Data = [];
	
	let returnData = {x_axis: chartTimeLabels, y_axis1: yAxis1Data, y_axis2: yAxis2Data};
	res.send(returnData);
}

// donut graph 
exports.getDailyCapacityData = function(req, res) {
	let returnData = {currentAverageValue: 70};
	res.send(returnData);
}

// people density scatter plot
exports.getPeopleDensityData = function(req, res) {
	let returnData = {currentAverageValue: 70};
	res.send(returnData);
}

// covid data trend- line graph 
exports.getCovidTickerData = function(req, res) {
	let xAxisDataLabels = [];
	
	for (let i=0; i < 20; i++) {
		xAxisDataLabels.push(new Date(2020, 11, i+1));
	}
	
	let yAxisData = [1, 8, 13, 4, 27, 13, 36, 19, 10, 14, 24, 8, 24, 15, 5, 3, 20, 23, 27, 11];
	
	
	let returnData = {x_axis: xAxisDataLabels, y_axis: yAxisData};
	res.send(returnData);
}

