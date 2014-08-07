/**
 * Created by akshat on 30/7/14.
 */

require('../config.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var studentSchema = require('../models/studentmodel');
var student_functions = require('../routes/students.js');
var stages_functions = require('../routes/stages.js');
var async = require('async');

function leaderboard(req,res){
   Students.find({'createdon' :
        {$lte : "2014-07-25"}
            },
        {'name' :1,
            'facebookid' :1,
            'points' :1,
            'email' :1,
            'location.name' :1,
            'college.name' : 1})
        .sort({'points' : -1})
        .limit(100).exec(function(err,students){
           if(students){
              res.send(JSON.stringify(students));
           }

    });


}


module.exports = {leaderboard :leaderboard}

