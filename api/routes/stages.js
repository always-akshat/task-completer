/**
 * Created by akshat on 5/6/14.
 */


require('../config.js');
var stageSchema = require('../models/stagesmodel');

//----------------------------
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
//---- remove this later [for generating objectid]--------------

stages = stageSchema.stages;

var dummystage= {
    name: 'Test stage',
    campaignid :new ObjectId,
    tasks: [],
    startdate : Date.now(),
    enddate : Date.now(),
    createdby :'Admin',
    createdon : Date.now(),
    updatedon : Date.now()
};

console.log(JSON.stringify(dummystage));


exports.list = function (req, res) {
    stages.find({}, function (err, stages) {
        res.send(JSON.stringify(stages));
    });
};

exports.addstage = function (req, res) {

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

    stages.count({'name': req.body.name}, function (err, count) {
        var data = req.body;
        console.log(count);
        if (err) {
            callback(err.message, null);
        }
        else {
            if (0 == count) {

                objstage = new stages(data);
                console.log(objstage);
                objstage.save();

                return callback(objstage, 'stage Added');
            }
            else {
                return callback(null, 'stage exists');
            }
        }

    });


}

