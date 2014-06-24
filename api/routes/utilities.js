/**
 * Created by akshat on 24/6/14.
 */


var config = require('../config.js');

var locationSchema = require('../models/locationmodel.js');
var collegeSchema = require('../models/collegemodel.js');
Locations = locationSchema.locations;
Colleges = collegeSchema.colleges;

exports.locationlist = function(req, res){
    Locations.find().sort({Id :1}).select('Id CityName').exec(function (err, locations){
        res.send(locations);
    });
};


exports.collegelsist = function(req, res){
    Colleges.find().sort({CollegeName :1}).select('Id CollegeName').exec(function (err, colleges){
        res.send(colleges);
    });
};



