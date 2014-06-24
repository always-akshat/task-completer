/**
 * Created by akshat on 24/6/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var locationsSchema = new Schema({
    id : Number,
    CityName : String
    },
    { collection: 'location' });

exports.locations = mongoose.model('Locations', locationsSchema);
