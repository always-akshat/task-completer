/**
 * Created by akshat on 5/6/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var stagesSchema = new Schema({
    name : String,
    campaignid : ObjectId,
    tasks : [{ stageid : ObjectId }],
    startdate : Date,
    enddate : Date,
    createddy : String,
    createdon: {type: Date, 'default': Date.now},
    updatedon : {type : Date, 'default':Date.now}
});

exports.stages = mongoose.model('Stages', stagesSchema);
/**
 * Created by akshat on 5/6/14.
 */