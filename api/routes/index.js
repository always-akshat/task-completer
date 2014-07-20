/**
 * Created by Ankit on 5/16/2014.
 */

var path = require('path');

exports.index = function(req, res){
     res.sendfile(path.resolve('../app/views/index.html'));
};


exports.register = function(req, res){
    res.sendfile(path.resolve('../app/views/register.html'));
};

