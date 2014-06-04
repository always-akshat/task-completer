/**
 * Created by Ankit on 5/16/2014.
 */

var mongoose = require('mongoose');
var validator = require('node-validator');
//mongoose.connect('mongodb://viberdbuser:viberdbuser@ds033569.mongolab.com:33569/viberapp');
mongoose.connect('mongodb://viber:viber@ds041218.mongolab.com:41218/viber');


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
console.log(JSON.stringify(dummyuser));


exports.list = function (req, res) {
    Students.find({}, function (err, Students) {
        console.log('sending student d');
        res.send(JSON.stringify(Students));

    });
};


exports.signup = function (req, res) {

    validateSignUp(req, function (error, data) {
        console.log('returnValidate');
        if (error)res.send(400, error.message)
        else {
            res.send(JSON.stringify(data));
            console.log('Sending data back to the client');
        }
    });

};




function validateSignUp(req, callback) {

    Students.count({'facebookid': req.body.facebookid}, function (err, count) {
        var data = req.body;

        if (err) callback(err.message, null);
        else {
            if (0 == count) {

                objstudent = new Students(data);

                objstudent.save();
                return callback(objstudent, 'User Registered');
            }
            else {
                return callback(null, 'facebookid exists');
                }
        }

    });


}

exports.validate = function student_sanitizor(req,callback){
    data = req.body;
    student = new Students(data);

    console.log(validator);
    //student.email = validator.escape(student.email);
    //console.log(student.email);
}

