/**
 * Created by akshat on 24/6/14.
 */


var config = require('../config.js');

var locationSchema = require('../models/locationmodel.js');
var collegeSchema = require('../models/collegemodel.js');


Locations = locationSchema.locations;
Colleges = collegeSchema.colleges;

var students = require("./students");

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

exports.handle_task_Request = function(facebookid,taskid,answers,cb) {
    console.log( '---- data from utilities:handle_task_request---' +
        '\nfacebookid : ' + facebookid +
        '\ntaskid  ' + taskid +
        '\nanswers' + JSON.stringify(answers));
    students.updateAnswers(facebookid, taskid, answers, function (added_answers) {
        if (added_answers != 0) {
            console.log('obtained added_Answers');
            var value_to_return = {};
            value_to_return.answers = added_answers;
            students.completeTask(facebookid, taskid, function (completion_val) {
                console.log('obtained completed_val');
                if (completion_val !== 0) {
                    value_to_return.completiondata = completion_val;
                    value_to_return.completiondata.level = 33;
                }
                cb(value_to_return);
            });
        } else {
            cb(0);

        }
    });
}
