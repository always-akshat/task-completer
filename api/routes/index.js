/**
 * Created by Ankit on 5/16/2014.
 */

var path = require('path');

exports.index = function(req, res){
    res.sendfile(path.resolve('../app/index.html'));
};