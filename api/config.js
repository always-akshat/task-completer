/**
 * Created by akshat on 5/6/14.
 */

var mongoose = require('mongoose');
//mongoose.connect('mongodb://viber_app:akshat@ds059908.mongolab.com:59908/viber_prod_backup_24_july');
mongoose.connect('mongodb://viber_app:akshat@ds053449.mongolab.com:53449/viber_prod');


exports.utils = require('../api/utils.js');

exports.ObjectId =  mongoose.Types.ObjectId;