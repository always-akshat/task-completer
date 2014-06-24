/**
 * Created by akshat on 5/6/14.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://viber:viber@ds041218.mongolab.com:41218/viber');

exports.utils = require('../api/utils.js');

