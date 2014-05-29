/**
 * Created by Ankit on 5/19/2014.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var studentSchema= new Schema({
    name: String,
    email: String,
    facebookid: String,
    collegeid : Number,
    createdOn: {type: Date, 'default': Date.now},
    updatedOn : {type : Date, 'default':Date.now}
});

module.exports = mongoose.model('Student', studentSchema);
