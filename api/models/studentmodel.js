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
    facebookid: Number,
    twitterid : Number,
    createdon: {type: Date, 'default': Date.now},
    updatedon : {type : Date, 'default':Date.now},
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
                value : [Number]
               }
             ],
    user_tasks :[user_task_schema],
    type : {id : Number,
            name : String}
},
    { collection: 'students' })

exports.student = mongoose.model('Student', studentSchema);



