/**
 * Created by akshat on 24/6/14.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var collegesSchema = new Schema({
        id : Number,
        CollegeName : String
    },
    { collection: 'college' });

exports.colleges = mongoose.model('Colleges', collegesSchema);

