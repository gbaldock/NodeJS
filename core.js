var path = require('path');
var util = require('util');  //util adds a date and timestamp
var v8 = require('v8')

//console.log(path.basename(__filename));
util.log(path.basename(__filename));
var dirUpLoads = path.join(__dirname, 'www', 'files', 'uploads');
//console.log(dirUpLoads);
util.log(dirUpLoads);
//get memory usage statistics
util.log(v8.getHeapStatistics());