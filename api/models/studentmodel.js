/**
 * Created by Ankit on 5/19/2014.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var user_task_schema = new Schema({
    task_id : String,
    type : {id : Number, name : String},
    points : Number,
    completed : Number,
    approvalrequired : Number,
    managerapproved : Number,
    fields : [Schema.Types.Mixed],
    answers : [Schema.Types.Mixed],
    condition :[Schema.Types.Mixed]
});

var studentSchema = new Schema({
    name: String,
    email: String,
    mobile : String,
    facebookid: String,
    twitterid : Number,
    createdon: {type: Date, 'default': Date.now},
    updatedon : {type : Date, 'default':Date.now},
    gender : String,
    dob : Date,
    college : {
        id: Number,
        name : String
    },
    location : {
        id: Number,
        name : String
        },
    facebook : {
        authorized : String,
        friends : [String],
        authcode :String
    },
    twitter :{
        authorized : Number,
        authcode : String
    },
    points : Number,
    stages : [ObjectId],      //changed from number to objectid
    tasks  : [
               { stage: ObjectId,   //changed from number to objectid
                value : [ObjectId]  //changed from number to objectid
               }
             ],
    user_tasks :[user_task_schema],
    type : {id : Number,
            name : String},
    verified : Number,
    auth : Number,
    visitcount :Number,
    referred_by: Number
},
    { collection: 'students' })

exports.student = mongoose.model('Student', studentSchema);
exports.student_task = mongoose.model('Student_task',user_task_schema);



