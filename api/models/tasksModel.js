/**
 * Created by Ankit on 6/3/2014.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var tasksSchema= new Schema({
    name: String,
    description : String,
    points : Number,
    parentTaskId : ObjectId,
    startDate : Date,
    endDate : Date,
    createdBy : String,
    createdOn: {type: Date, 'default': Date.now},
    updatedOn : {type : Date, 'default':Date.now}
});

module.exports = mongoose.model('Tasks', tasksSchema);

var campaignSchema = new Schema({

    name : String,
    description : String,
    stages : [{ stageId : ObjectId }],
    startDate : Date,
    endDate : Date,
    createdBy : String,
    createdOn: {type: Date, 'default': Date.now},
    updatedOn : {type : Date, 'default':Date.now}


});
