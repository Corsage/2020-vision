// test functions from different routes 
exports.onload = function(req, res) {
	res.send({ data: "dummy data" });	
};

exports.alert = function(req, res) {
	res.send({ data: "Maximum number of people in business."})
}
