/**
 * Created by akshat on 5/6/14.
 */


require('../config.js');
var campaignSchema = require('../models/campaignsmodel');

Campaigns = campaignSchema.campaign;


var dummycampaign= {
    name: 'Test Campaign',
    description : 'This is a test description',
    startdate : Date.now(),
    enddate : Date.now(),
    createdby :'Admin',
    createdon : Date.now(),
    updatedon : Date.now()
};



exports.list = function (req, res) {
    Campaigns.find({}, function (err, Campaigns) {
        res.send(JSON.stringify(Campaigns));
    });
};

exports.addcampaign = function (req, res) {

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
    console.log(req.params.oid);
    return Campaigns.findOne({ '_id': req.params.oid}, function (err, campaign) {
        if (!err) {

            if(campaign === null){
                return res.send('no record found');
            }
            else
            {
                return res.send(campaign);
            }
        } else {
            return res.send(err);
        }
    });

}


function validateSignUp(req, callback) {

    Campaigns.count({'name': req.body.name}, function (err, count) {
        var data = req.body;
        console.log(count);
        if (err) {
            callback(err.message, null);
        }
        else {
            if (0 == count) {

                objcampaign = new Campaigns(data);
                console.log(objcampaign);
                objcampaign.save();

                return callback(objcampaign, 'Campaign Added');
            }
            else {
                return callback(null, 'Campaign exists');
            }
        }

    });


}

