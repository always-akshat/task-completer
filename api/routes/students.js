/**
 * Created by Ankit on 5/16/2014.
 */

var config = require('../config.js');

var studentSchema = require('../models/studentmodel');
var taskSchema = require('../models/tasksmodel');
var task_functions = require('../routes/tasks.js');
var stages_function = require('../routes/stages.js');


Students = studentSchema.student;
student_task = studentSchema.student_task;
vibes_transaction = studentSchema.vibes_transaction;
tasks = taskSchema.tasks;

/*
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
 */

function list(req, res) {
    Students.find({}, function (err, Students) {
        res.send(JSON.stringify(Students));
    });
};

function stage_add_to_all(req, res) {

    console.log('hello');
    Students.find().exists('user_tasks', false).limit(5000).exec(function (err, students) {

        students.forEach(function (instance) {
            console.log(instance.facebookid + ' -- ' + instance.name);
            var stageid = '5390521624349ecc0c108c10';
            var stage_name = 'Level 1';
            var stage = {
                        "name" : stage_name.toString(),
                        "stageid" : stageid.toString(),
                        "completion" : 0
                        };
            console.log(stage);
            console.log('adding student stages now');

            Students.update({'facebookid': instance.facebookid},
                {$addToSet: {stages:stage}},{upsert:true},function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log("Successfully added");
                }
            });

            console.log('student stages added');

            stages_function.getStageInfo(stageid, function (err, stage) {
                if (!err) {

                    if (stage && stage.tasks) {
                        var user_tasks = stage.tasks;
                        user_tasks.forEach(function (user_tasks) {
                            addTaskToUser(instance.facebookid, user_tasks.stageid.toString());
                        });
                    }
                }
            });

            });

        res.send('done');
    });


}

function getstudentdata(req, res) {

    if (req.session.student !== null) // check if the user is logged in
    {
        res.send(req.session.student);
    }
    else res.send('Unauthorized');

}

function signup(req, res) {


    validateSignUp(req, function (error, data) {
        console.log('returnValidate');
        if (error) {
            res.send(400, error.message)
        }
        else {
            var stageid = '[stageid]';
            stages_function.getStageInfo(stageid, function (err, stage) {
                if (!err) {

                    if (stage && stage.tasks) {
                        var user_tasks = stage.tasks;
                        user_tasks.forEach(function (user_tasks) {
                            console.log(user_tasks);
                            addTaskToUser('10152198497022499', user_tasks.stageid.toString());
                        });
                    }


                }
            });
            res.send(JSON.stringify(data));
            console.log('Sending data back to the client');
        }
    });

};

function info(req, res) {

    return Students.findOne({ 'facebookid': req.params.fbid}, function (err, student) {
        if (!err) {

            if (student === null) {
                console.log('not found');
                return res.send('no record found');
            }
            else {
                return res.send(student);
            }
        } else {
            return res.send(err);
        }
    });

}

function allusersoftype(req, res) {
    return Students.find({ 'type.id': req.params.usertypeid}, function (err, users) {
        if (!err) {

            if (users === null) {
                return res.send('0 users of this type');
            }
            else {
                return res.send(users);
            }
        } else {
            return res.send(err);
        }
    });


}

function getfacebookfriends(req, res) {
    return Students.find({ 'facebookid': req.params.fbid}, 'facebook.friends', function (err, friends) {
        if (!err) {

            if (friends === null) {
                return res.send('0 friends ');
            }
            else {
                return res.send(friends);
            }
        } else {
            return res.send(err);
        }
    });
}

function putfacebookfriends(req, res) {

    Students.update({facebookid: req.params.facebookid},
        {$addToSet: {'facebook.friends': {$each: req.body.friends}
        }

        }, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully added");
            }
        });
}


function addpoints(facebookid,points,cb) {
    //console.log('reached add points');
    Students.update({facebookid: facebookid},
        {$inc: {
            points: points
        }
        }, function (err) {
            if (err) {
                cb(0);
            } else {
                cb(points);
            }
        });
}

function leaderboard(req, res) {

    Students.find().sort({points: -1}).limit(10).select('name points facebookid location.name').exec(function (err, posts) {
        res.send(posts);
    });
}


function availabletasks(req, res) {
    return Students.find({ 'facebookid': req.params.fbid}, 'stages tasks', function (err, opentasks) {
        if (!err) {

            if (friends === null) {
                return res.send(-1);
            }
            else {
                return res.send(opentasks);
            }
        } else {
            return res.send(err);
        }
    });
}  // not implemented yet

function submittask(req, res) {
    var facebookid = req.params.fbid;
    var taskid = req.params.taskid;
    addTaskToUser(facebookid, taskid);

}

function updatetask(req, res) {

    var facebookid = req.params.fbid;
    var taskid = req.params.taskid;
    var verb = req.body.verb;

    switch (verb) {
        case 'updateAnswers' :
            updateAnswers(facebookid, taskid, req.body.answers);
            break;
        case 'completeTask' :
            completeTask(facebookid, taskid);
            break;
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

                config.utils.objectvalidator('student', objstudent, function (validated_object) {

                    var new_student = validated_object;
                    console.log('got something');

                    if (validated_object !== 0) {
                        console.log(validated_object);
                        objstudent.save();
                        return callback(validated_object, 'User Registered');
                    } else {
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




function update_settings(req, callback) {


    Students.count({'facebookid': req.body.session.facebookid}, function (err, count) {
        var data = req.body;

        if (err) {
            callback(err.message, null);
        }
        else {
            if (0 == count) {

                objstudent = new Students(data);

                config.utils.objectvalidator('student', objstudent, function (validated_object) {

                    var new_student = validated_object;
                    console.log('got something');

                    if (validated_object !== 0) {
                        console.log(validated_object);
                        objstudent.save();
                        return callback(validated_object, 'User Registered');
                    } else {
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

function updateAnswers(facebookid, taskid, answers,cb) {

    console.log('logging new answers in updateAnswers :'  + JSON.stringify(answers));
    Students.findOne({ 'facebookid': facebookid })
        .select({ 'user_tasks': { $elemMatch: {task_id: taskid}}})
        .exec(function (err, doc) {
            if (err) {
                cb(0);
            } else {
                console.log('these are the answers \n' +JSON.stringify(doc.user_tasks[0].answers) +'\n\n');

                old_answers = new Array();

                if(doc.user_tasks[0].answers.length >0 ) {
                    old_answers = doc.user_tasks[0].answers;
                }
                old_answers.push(answers);

                //console.log('final answers \n' + JSON.stringify(old_answers));
                //console.log('final answers without stringify' + old_answers);



                Students.update({'facebookid': facebookid, 'user_tasks.task_id': taskid},
                    {$set: { 'user_tasks.$.answers': old_answers } }
                    , function (err) {
                        if (err) {
                            console.log(err);
                            cb(0);
                        } else {
                            cb(old_answers);
                        }
                    });
                }
        });




                /*Students.findOne({ 'facebookid': facebookid })
                    .select({ 'user_tasks': { $elemMatch: {task_id: taskid}}})
                    .exec(function (err, doc) {
                        if (err) {
                            cb(0);
                        } else {


                            if(doc.user_tasks[0].answers) {
                                var old_answers = doc.user_tasks[0].answers;
                                var check_criteria = (Object.keys(answers));
                                for (var index = 0; index < check_criteria.length; index++) {
                                    prop = [check_criteria[index]].toString();
                                    if (answers[prop] !== ''
                                        || (typeof answers[prop] !== 'undefined')
                                        || answers[prop] !== null) {
                                        old_answers[prop] = answers[prop];
                                    } else {
                                        console.log('no');
                                    }
                                }


                                Students.update({'facebookid': facebookid, 'user_tasks.task_id': taskid},
                                    {$set: { 'user_tasks.$.answers': old_answers } }
                                    , function (err) {
                                        if (err) {
                                            cb(0);
                                        } else {
                                            cb(old_answers);
                                        }
                                    });

                                console.log(old_answers);
                            }else{
                                Students.update({'facebookid': facebookid, 'user_tasks.task_id': taskid},
                                    {$set: { 'user_tasks.$.answers': answers } }
                                    , function (err) {
                                        if (err) {
                                            cb(0);
                                        } else {
                                            cb(answers);
                                        }
                                    });
                            }
                        }
                    }); */

};

function completeTask(facebookid, taskid,cb) {


    Students.findOne({ 'facebookid': facebookid })
        .select({ 'user_tasks': { $elemMatch: {task_id: taskid}}})
        .exec(function (err, doc) {
            var condition = doc.user_tasks[0].condition;
            var answers = doc.user_tasks[0].answers;
            var points = doc.user_tasks[0].points;
            var stageid = doc.user_tasks[0].stage;
            var c_pc = doc.user_tasks[0].completevalue;
            var already_complete = doc.user_tasks[0].completed;



            var check_criteria = (Object.keys(condition));


                var check_object = {};
            for (var index = 0; index < check_criteria.length; index++) {
                prop = [check_criteria[index]].toString();
                    check_object[prop] =0;
            }

            //console.log('this is the check object :' + JSON.stringify(check_object));
            answers.forEach(function (instance)
            {

            for (var index = 0; index < check_criteria.length; index++) {
                prop = [check_criteria[index]].toString();

                if (instance.hasOwnProperty(prop)
                    && instance[prop] !== ''
                    && (typeof instance[prop] !== 'undefined')
                    && instance[prop] !== null) {
                    check_object[prop]= 1;
                    //console.log(prop + ' value is present');
                }else{
                    //console.log(prop + 'value is not present');
                }


            }
        });

            var completion = 1;
            for(var index in check_object)
            {

                if(check_object[index] == 1){

                }else{
                    completion = 0;
                }
            }

            console.log('completion :' + completion);
            if (completion == 1) {
                var completion_value = {};
                completion_value.user_task = doc.user_tasks[0];
                Students.update({'facebookid': facebookid, 'user_tasks.task_id': taskid},    //completion :1, add points, add transaction
                    {$set: { 'user_tasks.$.completed': 1 } }
                    , function (err) {
                        if (err) {
                            cb(0);
                        } else {
                            addpoints(facebookid,points,function(points_to_add){
                                //console.log('points to add :'+ points_to_add);
                                if(points_to_add == 0){
                                    cb(0)
                                }else{
                                    completion_value.points = points_to_add;
                                    var transaction = new studentSchema.vibes_transaction;
                                    transaction.vibes = points;
                                    transaction.type = 'task';
                                    transaction.sign = 1;
                                    transaction.message = 'Task completion';
                                    console.log('added points');
                                    VibesTransaction(facebookid,transaction,function(v_transaction){
                                        console.log(v_transaction);
                                        if(v_transaction !== 0) {
                                            completion_value.transaction = v_transaction;
                                            if (already_complete != 1) {
                                                console.log('calling stage completion');
                                                complete_user_stage(facebookid, stageid, c_pc, function (completed_percentage){
                                                    if(completed_percentage ==0){
                                                        cb(0)
                                                    }else{
                                                        completion_value.level = completed_percentage;
                                                        cb(completion_value);
                                                    }
                                                })
                                            }
                                            else {
                                            cb(completion_value);
                                            }
                                            console.log('added transactiontion');
                                        }else{
                                            cb(0)
                                        }

                                    });
                                }
                            });




                            /*task_functions.getchildren(taskid, function (new_tasks) {
                                var unlockedtasks = new_tasks;
                                console.log('student');
                                unlockedtasks.forEach(function (entry) {
                                    addTaskToUser(facebookid, entry._id);
                                });

                            }); */


                        }
                    });

            }else {
                cb(0)
            }


        });

}

function addTaskToUser(facebookid, taskid) {

    taskid = config.ObjectId(taskid);

    return tasks.findOne({ '_id': taskid}, function (err, task) {
        if (!err) {

            if (task === null) {
                console.log(taskid + ' not there ?')
                return ('no record found');
            }
            else {

                student_task = new studentSchema.student_task;
                student_task.task_id = taskid;
                student_task.points = task.points;
                student_task.completed = 0;
                student_task.approvalrequired = task.approvalrequired;
                student_task.managerapproved = 0;
                student_task.fields = task.fields;
                student_task.condition = task.condition;
                student_task.type = task.type;
                student_task.stage = task.stage;
                student_task.completevalue = task.completevalue;


                if (!student_task) {
                    return ('student task could not be added');
                } else {

                    switch (student_task.type.id) {
                        case (1) :
                        {
                            student_task.completed = 0;
                            break;
                        }  //social
                        case (2) :
                        {
                            student_task.completed = 1;
                            break;
                        }  //photos
                        case (3) :
                        {
                            student_task.completed = 2;
                            break;
                        }  //survey
                        case (4) :
                        {
                            student_task.completed = 1;
                            break;
                        }  //phone_no
                    }


                    Students.update({'facebookid': facebookid}, {$addToSet: {user_tasks: student_task}},
                        function (err, added_task) {

                            if (err) {
                                return ({"error": err});
                            }
                            return ({"updated": added_task});
                        })
                }


            }
        } else {
            return console.log(err);
        }
    });
}


function addTwitter(req, res) {
    console.log('student facebookid ' + req.session.student.facebookid)
    console.log('student twit data ' + JSON.stringify(req.session.twit));

    /*return  Students.update({'facebookid':'10152198497022499','twitter.authorized':0},
     {$set : {"twitter.$.authorized" : 1, "twitter.$.authcode": "abcd"} }
     ,function(err){
     if(err){
     console.log(err);
     }else{

     }
     }); */
    return Students.findOne({ facebookid: req.session.student.facebookid }, function (err, doc) {
        if (!err) {


            doc.twitter.authorized = 1;
            doc.twitterid = req.session.twit['id']
            doc.twitter.name = req.session.twit['name'];
            doc.twitter.username = req.session.twit['username'];
            doc.twitter.authcode = req.session.twit['authcode'];
            doc.twitter.secret = req.session.twit['secret'];

            doc.save();
            res.send('<script>window.close()</script>');
        }

        else {
            console.log(err)
        }
        ;
    });
}

function VibesTransaction(fbid, transaction,cb) {

       console.log('reached transaction');
    transaction_skeleton = new studentSchema.vibes_transaction;
    transaction_skeleton = transaction;


    Students.update({'facebookid': fbid}, {$push: {vibes_transaction: transaction_skeleton}},
        function (err, added_task) {

            if (err) {
                cb(0);
            } else {
                cb(transaction);
            }
        })


}

function logout(req, res) {
    req.session.destroy;
    res.redirect('/');
}

function complete_user_stage(facebookid,stageid,completion_value,cb) {
    console.log('stage completion data...' + facebookid + ' -- \n' + stageid + '----\n ' + completion_value);

    Students.update({'facebookid': facebookid, 'stages.stageid': stageid.toString()},
        {$inc: { 'stages.$.completion': completion_value } }
        , function (err,data) {
            console.log(data);
            if (err) {
                console.log(err);
                cb(0);
            } else {
                cb(completion_value);
            }
        });



}

module.exports = {list: list,
    stage_add_to_all: stage_add_to_all,
    getstudentdata: getstudentdata,
    signup: signup,
    info: info,
    allusersoftype: allusersoftype,
    getfacebookfriends: getfacebookfriends,
    putfacebookfriends: putfacebookfriends,
    addpoints: addpoints,
    leaderboard: leaderboard,
    availabletasks: availabletasks,
    submittask: submittask,
    updatetask: updatetask,
    validateSignUp: validateSignUp,
    updateAnswers: updateAnswers,
    completeTask: completeTask,
    addTaskToUser: addTaskToUser,
    addTwitter: addTwitter,
    VibesTransaction: VibesTransaction,
    logout: logout
}

