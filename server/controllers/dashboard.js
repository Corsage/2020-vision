// test functions from different routes 
exports.onload = function(req, res) {
	res.send({ data: "dummy data" });	
};

exports.alert = function(req, res) {
	res.send({ data: "Maximum number of people in business."})
}

// Small Stat Data Functions 
exports.getEntranceRateData = function(req, res) {
	let xAxisChartLabels = [];
	let yAxisEntranceCountData = [];

	for (var x = 1; x < 24; x++) {
        const date = new Date(2020, 11, 21, x, 0, 0, 0);
		xAxisChartLabels.push(date.getHours());
		
		// data between 15-30 
		yAxisEntranceCountData.push(Math.floor(Math.random() * 30) + 15);
	}
	let returnData = {currentAverageValue: 22, percentage: 0.05, x_axis: xAxisChartLabels, y_axis: yAxisEntranceCountData};
	res.send(returnData);
}

exports.getExitRateData = function(req, res) {
	let xAxisChartLabels = [];
	let yAxisExitCountData = [];

	for (var x = 1; x < 24; x++) {
        const date = new Date(2020, 11, 21, x, 0, 0, 0);
		xAxisChartLabels.push(date.getHours());
		
		// data between 15-30 
		yAxisExitCountData.push(Math.floor(Math.random() * 30) + 15);
	}

	let returnData = {currentAverageValue: 25, percentage: 0.10, x_axis: xAxisChartLabels, y_axis: yAxisExitCountData};
	res.send(returnData);
}

exports.getAverageCustomersRateData = function(req, res) {
	let xAxisChartLabels = [];
	let yAxisCustomerCountData = [];

	for (var x = 1; x < 24; x++) {
        const date = new Date(2020, 11, 21, x, 0, 0, 0);
		xAxisChartLabels.push(date.getHours());
		
		// data between 2000-3000
		yAxisCustomerCountData.push(Math.floor(Math.random() * 3000) + 2000);
	}

	let returnData = {currentAverageValue: 500, percentage: -0.20, x_axis: xAxisChartLabels, y_axis: yAxisCustomerCountData};
	res.send(returnData);
}

exports.getAverageCapacityRateData = function(req, res) {
	let xAxisChartLabels = [];
	let yAxisCustomerCountData = [];

	for (var x = 1; x < 24; x++) {
        const date = new Date(2020, 11, 21, x, 0, 0, 0);
		xAxisChartLabels.push(date.getHours());
		
		// data between 0-100
		yAxisCustomerCountData.push(Math.floor(Math.random() * 90) + 50);
	}

	let returnData = {currentAverageValue: 70, percentage: 0.20, x_axis: xAxisChartLabels, y_axis: yAxisCustomerCountData};
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
	let yAxis1DataOut = [10, 15, 0, 0, 0, 0, 0, 0, 2, 3, 27, 20, 18, 15, 18, 17, 14, 25, 20, 10, 12, 10, 6, 4];
	let yAxis2DataIn = [4, 0, 0, 0, 0, 0, 0, 5, 10, 25, 15, 35, 10, 15, 20, 24, 19, 22, 14, 18, 8, 6, 9, 5];
	
	let returnData = {x_axis: chartTimeLabels, y_axis_out: yAxis1DataOut, y_axis_in: yAxis2DataIn};
	res.send(returnData);
}

// donut graph 
exports.getDailyCapacityData = function(req, res) {
	let returnData = {currentAverageValue: 70};
	res.send(returnData);
}

// people density scatter plot
exports.getPeopleDensityData = function(req, res) {
	// let returnData = {currentAverageValue: 70};
	// res.send(returnData);
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

