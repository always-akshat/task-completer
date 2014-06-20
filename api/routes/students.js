/**
 * Created by Ankit on 5/16/2014.
 */

var config = require('../config.js');

var studentSchema = require('../models/studentmodel');
var taskSchema = require('../models/tasksmodel');
var task_functions = require('../routes/tasks.js');

Students = studentSchema.student;
student_task  = studentSchema.student_task;
tasks = taskSchema.tasks;


dummyuser = new Students;
dummyuser.name ='Test User';
dummyuser.email = 'testing@viberapp.com';
dummyuser.mobile = 98292929292;
dummyuser.facebookid = 0000230232738;
dummyuser.createdon = Date.now();
dummyuser.updatedon = Date.now();
dummyuser.gender = 'male';
dummyuser.dob = '21/4/1990'; // has to be an ISO date after casting
dummyuser.college.id = 989;
dummyuser.college.name = 'Testing College';
dummyuser.location.id = 1401;
dummyuser.location.name = 'Random city';
dummyuser.facebook.authorized = 1;
dummyuser.facebook.authcode = 'ashdwhh23232hshdghsgbdjabd334343434hjbdhsbjdbjwbd';
dummyuser.points = 0;
dummyuser.type.id = 1;
dummyuser.type.name = 'Student';
//console.log(JSON.stringify(dummyuser));


exports.list = function (req, res) {
    Students.find({}, function (err, Students) {
        res.send(JSON.stringify(Students));
    });
};


exports.signup = function (req, res) {

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

exports.info = function(req,res){

    return Students.findOne({ 'facebookid': req.params.fbid}, function (err, student) {
        if (!err) {

           if(student === null){
               console.log('not found');
               return res.send('no record found');
           }
           else
           {
               return res.send(student);
           }
        } else {
            return res.send(err);
        }
    });

}

exports.allusersoftype = function(req,res) {
    return Students.find({ 'type.id': req.params.usertypeid}, function (err, users) {
        if (!err) {

            if(users === null){
                return res.send('0 users of this type');
            }
            else
            {
                return res.send(users);
            }
        } else {
            return res.send(err);
        }
    });


}

exports.getfacebookfriends = function(req,res) {
    return Students.find({ 'facebookid': req.params.fbid},'facebook.friends', function (err, friends) {
        if (!err) {

            if(friends === null){
                return res.send('0 friends ');
            }
            else
            {
                return res.send(friends);
            }
        } else {
            return res.send(err);
        }
    });
}

exports.putfacebookfriends = function(req,res) {

    Students.update({facebookid: req.params.facebookid},
                        {$addToSet:
                            {'facebook.friends':
                                {$each : req.body.friends}
                            }

                        },function(err){
        if(err){
            console.log(err);
        }else{
            console.log("Successfully added");
        }
    });
}

exports.addpoints = function(req,res) {

    Students.update({facebookid: req.params.facebookid},
        {$inc: {
                 points: req.body.points
               }
        },function(err){
            if(err){
                console.log(err);
            }else{
                console.log("Successfully added");
            }
        });
}


exports.availabletasks = function(req,res){
    return Students.find({ 'facebookid': req.params.fbid},'stages tasks', function (err, opentasks) {
        if (!err) {

            if(friends === null){
                return res.send(-1);
            }
            else
            {
                return res.send(opentasks);
            }
        } else {
            return res.send(err);
        }
    });
}  // not implemented yet

exports.submittask = function(req,res){
    var facebookid = req.params.fbid;
    var taskid = req.params.taskid;
    addTaskToUser(facebookid,taskid);

}

exports.updatetask = function(req,res){

    console.log('a');
    var facebookid = req.params.fbid;
    var taskid = req.params.taskid;
    var verb = req.body.verb;

    console.log (verb + ' ---- ' + facebookid + ' ---- ' + taskid);
    switch(verb){
        case 'updateAnswers' : updateAnswers(facebookid,taskid,req.body.answers);break;
        case 'completeTask' : completeTask(facebookid,taskid);break;
        }

}


function validateSignUp(req, callback) {


    Students.count({'facebookid': req.body.facebookid}, function (err, count) {
        var data = req.body;
        console.log(count);
        if (err) {
            callback(err.message, null);
                 }
        else {
            if (0 == count) {

                objstudent = new Students(data);

                 config.utils.objectvalidator('student',objstudent,function(validated_object){

                    var new_student = validated_object;
     console.log('got something');

                     if(validated_object !== 0){
                         console.log(validated_object);
                         objstudent.save();
                         return callback(validated_object, 'User Registered');
                     }else{
                         console.log('there was an error');
                         return callback(null, 'there was an error');
                     }
                });



            }
            else {
                return callback(null, 'facebookid exists');
                }
        }

    });


}

function updateAnswers(facebookid,taskid,answers){

    Students.update({'facebookid':facebookid,'user_tasks.task_id':taskid},
        {$set : { 'user_tasks.$.answers' : answers } }
        ,function(err){
            if(err){
                console.log(err);
            }else{
                console.log("Successfully added");
            }
        });

};

function completeTask(facebookid,taskid){
    var newtasks;
   return  Students.update({'facebookid':facebookid,'user_tasks.task_id':taskid},
        {$set : { 'user_tasks.$.completed' : 1 } }
        ,function(err){
            if(err){
                console.log(err);
            }else{
                console.log("Successfully completed");
               task_functions.getchildren(taskid,function(new_tasks){
                  var unlockedtasks = new_tasks;
                  console.log('student');
                   unlockedtasks.forEach(function(entry) {
                       addTaskToUser(facebookid,entry._id);
                   });

               });


            }
        });
}


function addTaskToUser(facebookid,taskid){
    return tasks.findOne({ '_id': taskid}, function (err, task) {
        if (!err) {

            if(task === null){
                return ('no record found');
            }
            else
            {
                student_task = new studentSchema.student_task;
                student_task.task_id = taskid;
                student_task.points = task.points;
                student_task.completed = 0;
                student_task.approvalrequired = task.approvalrequired;
                student_task.managerapproved = 0;
                student_task.fields = task.fields;
                student_task.condition = task.condition;
                student_task.type = task.type;
                console.log(student_task);

                if(!student_task){
                    return ('student task could not be added');
                }else {

                    switch (student_task.type.id){
                        case (1) : {student_task.completed  = 0;break;}  //social
                        case (2) : {student_task.completed  = 1;break;}  //photos
                        case (3) : {student_task.completed  = 2;break;}  //survey
                        case (4) : {student_task.completed  = 1;break;}  //phone_no
                    }


                    Students.update({'facebookid' : facebookid},{$addToSet:{user_tasks:student_task}},
                        function(err,added_task){

                            if (err) {
                                return ({"error": err});
                            }
                           return ({"updated": added_task});
                        })
                }


            }
        } else {
            return res.send(err);
        }
    });
}