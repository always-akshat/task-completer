/**
 * Created by akshat on 7/8/14.
 */
var cluster = require('cluster');

if (cluster.isMaster) {
    var os =require('os');
    // Count the machine's CPUs
    var cpuCount = os.cpus().length;
   for (var i = 0; i < 1; i += 1) {
        cluster.fork();
    }

}else{
    require('./app.js');
}