/**
 * Created by akshat on 30/7/14.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var config = require('../config.js');
var studentSchema = require('../models/studentmodel');
var student_functions = require('../routes/students.js');
var stages_functions = require('../routes/stages.js');
var async = require('async');





exports.singup = function(name,email){
    var params = config.params;
    params.Destination.ToAddresses[0]= email;
    params.Message.Body.Html.Data ="Hey "+name +","+
        "<br/><br/>" +
        "Welcome to the GoodVibes Community."+
        "<br/><br/>"+
        "What is #GoodVibes ?"+
        "<br/><br/>"+
        "#GoodVibes is about the simple joy of doing what you love,"+
        "of spreading it with people that you love. It could be music,"+
        "it could be the every day joke, it could be your random blog, even a selfie."+
        "Anything that makes you who you are, share it with your world."+
        "<br/><br/>"+
        "Good Vibes is you. Good Vibes is a more connected and happier world."+
        "<br/><br/>"+
        "Best,<br>"+
        "#Goodvibes";
    params.Message.Subject.Data ="Welcome to #GoodVibes";
    config.sesmail(params);

}
exports.referral = function(reffered,referrer,count,email){
    console.log('sending referral email');
    var params =  config.params;
    params.Destination.ToAddresses[0] =email;
    console.log('these are the addesses' + params.Destination.ToAddresses);
    params.Message.Body.Html.Data ="Hi "+ referrer+",<br><br>"+
    "Congratulations! Your friend " +reffered + " joined  #goodvibes through your referral link. <br>" +
    "You have earned 20 vibes.  <br><br>"+
    "<br><br>"+
    "Keep spreading #goodvibes to get more. <br><br>"+

                    "Best,<br>"+
                        "#Goodvibes Angels";
    params.Message.Subject.Data ="Welcome to #GoodVibes";
    config.sesmail(params);

}





