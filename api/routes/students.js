/**
 * Created by Ankit on 5/16/2014.
 */

require('../config.js');

var studentSchema = require('../models/studentmodel');

Students = studentSchema.student;

dummyuser = new Students;
dummyuser.name ='Test User';
dummyuser.email = 'testing@viberapp.com';
dummyuser.mobile = 98292929292;
dummyuser.facebookid = 0000230232738;
dummyuser.createdon = Date.now();
dummyuser.updatedon = Date.now();
dummyuser.gender = 'male';
dummyuser.dob = '21/4/1990';
dummyuser.college.id = 989;
dummyuser.college.name = 'Testing College';
dummyuser.facebook.authorized = 1;
dummyuser.facebook.authcode = 'ashdwhh23232hshdghsgbdjabd334343434hjbdhsbjdbjwbd';
dummyuser.points = 0;
dummyuser.stages = [1,0,0,0,0];
dummyuser.tasks = [ {stage :1 ,value :[1,0,0,0] }];
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
    console.log(req.params.facebookid + ' --- ' +req.body.friends);
    Students.update({facebookid: req.params.facebookid},
                        {$addToSet:
                            {'facebook.friends':
                                {$each : [99,100,201]}
                            }

                        },function(err){
        if(err){
            console.log(err);
        }else{
            console.log("Successfully added");
        }
    });
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
                console.log(objstudent);
                objstudent.save();

                return callback(objstudent, 'User Registered');
            }
            else {
                return callback(null, 'facebookid exists');
                }
        }

    });


}



