/**
 * Created by akshat on 5/6/14.
 */


require('../config.js');
var taskSchema = require('../models/tasksmodel');
//---------------------------------------
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
//-------- to be removed. generating objectid -----------------//

tasks = taskSchema.tasks;


var dummytask= {
    name: 'Test task',
    description : 'This is a test description',
    points : 20,
    parenttaskid : new ObjectId,
    stage : new ObjectId,
    startdate : Date.now(),
    enddate : Date.now(),
    createdby :'Admin',
    createdon : Date.now(),
    updatedon : Date.now(),
    fields :[
                {"anything" :"can come here"},
                ['sach','mein']
            ]
};



exports.list = function (req, res) {
    tasks.find({}, function (err, tasks) {
        res.send(JSON.stringify(tasks));
    });
};

exports.addtask = function (req, res) {

    validateSignUp(req, function (error, data) {
        console.log('returnValidate');
        if (error)
        {
            res.send(400, error.message)
        }
        else {
            res.send(JSON.stringify(data));
            console.log('Sending data back to the client');
        }
    });

};



function validateSignUp(req, callback) {

    tasks.count({'name': req.body.name}, function (err, count) {
        var data = req.body;
        console.log(count);
        if (err) {
            callback(err.message, null);
        }
        else {
            if (0 == count) {

                objtask = new tasks(data);
                console.log(objtask);
                objtask.save();

                return callback(objtask, 'task Added');
            }
            else {
                return callback(null, 'task exists');
            }
        }

    });


}

