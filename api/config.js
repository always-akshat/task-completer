/**
 * Created by akshat on 5/6/14.
 */

var mongoose = require('mongoose');
/*var aws = require('aws-sdk');

aws.config.loadFromPath('./aws-config.json');

var ses = new aws.SES();
//console.log(ses);


function mail(){

    var params = {
        Destination: {
            ToAddresses: [
                'always.akshat@gmail.com',
            ]
        },
        Message: {
            Body: {
                Html: {
                    Data: '<p>Hi, Glory Glory Manchester United.</p>' // required
                    //Charset: 'STRING_VALUE'
                }
            },
            Subject: { // required
                Data: 'Manchester United' // required
                //Charset: 'STRING_VALUE'
            }
        },
        Source: 'hello@thegoodvibes.in', // required
        ReplyToAddresses: [
            'hello@thegoodvibes.in',
            // ... more items ...
        ]
        //ReturnPath: 'STRING_VALUE'
    };
    ses.sendEmail(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
}

*/



//mongoose.connect('mongodb://viber_app:akshat@ds053469.mongolab.com:53469/viber_backup_28_july_11_20_am');
//mongoose.connect('mongodb://viber_app:akshat@ds053449.mongolab.com:53449/viber_prod');
mongoose.connect('mongodb://viber_app:akshat@ds053469.mongolab.com:53469/viber_backup_28_july_11_20_am');
exports.utils = require('../api/utils.js');

exports.ObjectId =  mongoose.Types.ObjectId;