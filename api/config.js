/**
 * Created by akshat on 5/6/14.
 */

var mongoose = require('mongoose');
//mongoose.connect('mongodb://viber_app:akshat@ds053469.mongolab.com:53469/viber_backup_28_july_11_20_am');
//mongoose.connect('mongodb://viber_app:akshat@ds053449.mongolab.com:53449/viber_prod');
mongoose.connect('mongodb://viber_app:akshat@ds053469.mongolab.com:53469/viber_backup_28_july_11_20_am');
exports.utils = require('../api/utils.js');

exports.ObjectId =  mongoose.Types.ObjectId;