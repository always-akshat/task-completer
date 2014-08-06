/**
 * Created by akshat on 5/6/14.
 */

var mongoose = require('mongoose');
var aws = require('aws-sdk');

aws.config.loadFromPath('./aws-config.json');

// load AWS SES
var ses = new aws.SES({apiVersion: '2010-12-01'});


exports.params = {
    Destination: { // required
        ToAddresses: [

        ]
    },
    Message: { // required
        Body: { // required
            Html: {
                Data: ''//, // required
                    //Charset: 'STRING_VALUE'
            }
        },
        Subject: { // required
            Data: ''//, required
            //Charset: 'STRING_VALUE'
        }
    },
    Source: 'hello@thegoodvibes.in', // required
    ReplyToAddresses: [
        'hello@thegoodvibes.in',
        // ... more items ...
    ],
    //ReturnPath: 'STRING_VALUE'
};


exports.sesmail= function(params){
    ses.sendEmail(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
}








//mongoose.connect('mongodb://viber_app:akshat@ds053469.mongolab.com:53469/viber_backup_28_july_11_20_am');
mongoose.connect('mongodb://viber_app:akshat@ds053449.mongolab.com:53449/viber_prod');

exports.utils = require('../api/utils.js');
exports.ObjectId =  mongoose.Types.ObjectId;