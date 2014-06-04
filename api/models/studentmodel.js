/**
 * Created by Ankit on 5/19/2014.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var user_task_schema = new Schema({
    task_id : ObjectId,
    points : Number,
    completed : Number,
    fields : [Schema.Types.Mixed]
});

var studentSchema = new Schema({
    name: String,
    email: String,
    mobile : Number,
    facebookid: String,
    twitterid : Number,
    collegeid : Number,
    createdOn: {type: Date, 'default': Date.now},
    updatedOn : {type : Date, 'default':Date.now},
    gender : String,
    dob : Date,
    college : {
        id: Number,
        name : String
    },
    facebook : {
        authorized : Number,
        friends : [Number],
        authcode :String
    },
    twitter :{
        authorized : Number,
        authcode : String
    },
    points : Number,
    stages : [Number],
    tasks  : [
               { stage: Number,
                values : [Number]
               }
             ],
    user_tasks :[user_task_schema],
    created : Date,
    updated : Date,
    type : Number
})

exports.student = mongoose.model('Student', studentSchema);



