/**
 * Created by akshat on 5/6/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var campaignSchema = new Schema({
    name : String,
    description : String,
    stages : [{ stageid : ObjectId }],
    startdate : Date,
    enddate : Date,
    createddy : String,
    createdon: {type: Date, 'default': Date.now},
    updatedon : {type : Date, 'default':Date.now}

});

exports.campaign = mongoose.model('Campaigns', campaignSchema);
