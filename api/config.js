/**
 * Created by akshat on 5/6/14.
 */

var mongoose = require('mongoose');
//mongoose.connect('mongodb://viber:viber@ds041218.mongolab.com:41218/viber');
mongoose.connect('mongodb://viber_app:akshat@ds053449.mongolab.com:53449/viber_prod');

exports.utils = require('../api/utils.js');

exports.ObjectId =  mongoose.Types.ObjectId;