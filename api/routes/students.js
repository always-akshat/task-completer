/**
 * Created by Ankit on 5/16/2014.
 */

var mongoose = require('mongoose');
//mongoose.connect('mongodb://viberdbuser:viberdbuser@ds033569.mongolab.com:33569/viberapp');
mongoose.connect('mongodb://viber:viber@ds041218.mongolab.com:41218/viber');

var studentSchema = require('../models/studentmodel');
//var Students = mongoose.model('Student',studentSchema);


console.log(studentSchema.student);




exports.list = function(req, res){
    Students.find({}, function(err,Students){
       console.log('sending student d');
       res.send(JSON.stringify(Students));

    });
};


exports.signup = function(req,res){

    validateSignUp(req, function(error,data){
        console.log('returnValidate');
        if(error)res.send(400,error.message)
        else {

            res.send(JSON.stringify(data));
            console.log('Sending data back to the client');


        }

    });

};

function validateSignUp(req,callback){

    Students.count({'email' : req.body.email},function(err,count){
        var data = req.body;
        console.log('user count = '+count);
       if(err) callback(err.message,null);
        else    {
                    if(0 == count)
                    {

                        var objstudent = new Students({name:data.name,email:data.email,
                            collegeid:data.collegeid,facebookid:data.facebookid});

                        objstudent.save();
                        return callback(objstudent,'User Registered');
                    }
                    else
                    {

                        return callback(null,'User Already Exists');

                    }
                }

    });



}
