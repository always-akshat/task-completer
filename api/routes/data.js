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
var leaderboard_data_functions = require('../data/leaderboard.js');
var async = require('async');

Students = studentSchema.student;

function leaderboard(req,res){
leaderboard_data_functions.leaderboard1(req,res);
}


module.exports = {leaderboard :leaderboard}

