/**
 * Created by akshat on 14/6/14.
 */
var validator = require('validator');


exports.objectvalidator = function(objecttype,object,cb){
    console.log('entering utility function');
    var error = 0;

    switch (objecttype) {

        // validating basic student profile data
        //  name, email, facebookid, mobile, gender, college,location
        case 'student' : {
                if(
                   validator.isEmail(object.email)
                && validator.isNumeric(object.points)
                && object.points ==0
                && validator.isNumeric(object.facebookid)
                && validator.isNumeric(object.mobile)
                && validator.isNumeric(object.points)
                && !validator.isNull(validator.escape(object.name))
                && !validator.isNull(validator.escape(object.facebook.authcode))
                && object.facebook.authorized == 1
                && !validator.isNull(validator.escape(object.location.name))
                && validator.isNumeric(object.location.id)
                && !validator.isNull(validator.escape(object.college.name))
                && validator.isNumeric(object.college.id)
                && validator.isDate(object.createdon)
                && validator.isDate(object.updatedon)  ){
                    console.log('student validated');
                    cb(object);
                    }else{
                   cb(0);
}

        }


        case 'student_update' : {
            console.log('this is a student_update');
            if(
                validator.isEmail(object.email)
                && validator.isNumeric(parseInt(object.mobile))
                && !validator.isNull(validator.escape(object.name))
                // && !validator.isNull(validator.escape(object.location.name))
                && validator.isNumeric(object.location.id)
                // && !validator.isNull(validator.escape(object.college.name))
                && validator.isNumeric(object.college.id)){
                console.log('student validated');
                cb(object);
            }else{
                cb(0);
            }

        }

    }


}