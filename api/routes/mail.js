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
    params.Destination.ToAddresses =[];
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
    params.Destination.ToAddresses =[];
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
exports.cm_to_ambassador = function(cm,ambassador_mail){
    console.log('cm_to_ambassador');
    var params =  config.params;
    params.Destination.ToAddresses =[];
    params.Destination.ToAddresses[0] =ambassador_mail;
    //console.log('these are the addesses' + params.Destination.ToAddresses);
    params.Message.Body.Html.Data ="I am "+cm+" and will be your Reporting Manager for the #GoodVibes Campaign.<br><br>" +
        " Log in to www.thegoodvibes.in to start your internship. Feel free to contact me.<br><br>"+

        "Best,<br>"+
        "#Goodvibes Angels";
    params.Message.Subject.Data ="CM to Ambassador";
    config.sesmail(params);

}
exports.pm_to_cm = function(ambassador_mail){
    console.log('pm_to_cm');
    var params =  config.params;
    params.Destination.ToAddresses =[];
    params.Destination.ToAddresses[0] =ambassador_mail;
    //console.log('these are the addesses' + params.Destination.ToAddresses);
    params.Message.Body.Html.Data ="Congratulations once again on earning the valuable position of a Community Manager on the team.<br>" +
        " Hope you have already started discovering the fantastic app and are spreading GoodVibes by having richer conversations " +
        "with your friends through features like stickers and doodles.<br><br>"+

        "Best,<br>"+
        "#Goodvibes Angels";
    params.Message.Subject.Data ="CM to Ambassador";
    config.sesmail(params);

}
exports.zm_to_pm = function(ambassador_mail){
    console.log('zm_to_pm');
    var params =  config.params;
    params.Destination.ToAddresses =[];
    params.Destination.ToAddresses[0] =ambassador_mail;
    //console.log('these are the addesses' + params.Destination.ToAddresses);
    params.Message.Body.Html.Data ="As a Project0 Manager, your key role will be to lead a set of 100 GoodVibes Cluster Managers; " +
        "ensure that you put in your best efforts - keep them motivated & engaged; interact with them on a regular basis; take up their queries and provide solutions.<br><br>"+

        "Best,<br>"+
        "#Goodvibes Angels";
    params.Message.Subject.Data ="CM to Ambassador";
    config.sesmail(params);

}
exports.changemanager = function(emails,intern,old_m,new_m){
    console.log('change manager');
    var params =  config.params;
    params.Destination.ToAddresses =[];
    params.Destination.ToAddresses =emails;
    params.Message.Body.Html.Data =" The manager for "
        +intern+
        " was changed from "
        +old_m+
        " to "
        +new_m+
        ".<br>Best,<br>"+
        "#Goodvibes Angels";
    params.Message.Subject.Data ="CM to Ambassador";
    config.sesmail(params);
}


