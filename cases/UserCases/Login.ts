import {comparePassword} from '../../helpers/encryptClass'
import {VUserComplete} from '../../models/VUserComplete'

const authenticateUser = async (email, password) => {
    const response = await VUserComplete.findOne({where: {email}});
    if(response === null) return false
    const isValid = comparePassword(password, response.password);
    if( isValid ) return response;
    return false;
}

const lookupUser = (name) => {
    return {
        emailAddress: name
    }
}

exports.handler = async (event, context, callback) => {

    var user;
    if ( event.triggerSource == "UserMigration_Authentication" ) {
        
        // authenticate the user with your existing user directory service
        user = await authenticateUser(event.userName, event.request.password);
        if ( user ) {
            console.log("user", user)
            event.response.userAttributes = {
                "email": user.email,
                "email_verified": "true"
            };
            event.response.finalUserStatus = "CONFIRMED";
            event.response.messageAction = "SUPPRESS";
            
            console.log("hola mundo llego aqui 2.12")
            console.log(event)
            context.succeed(event);
        }
        else {
            // Return error to Amazon Cognito
            callback("Bad password");
        }
    }
    else if ( event.triggerSource == "UserMigration_ForgotPassword" ) {

        console.log("hola mundo llego aqui 3")
        // Lookup the user in your existing user directory service
        user = lookupUser(event.userName);
        if ( user ) {
            event.response.userAttributes = {
                "email": user.emailAddress,
                // required to enable password-reset code to be sent to user
                "email_verified": "true"  
            };
            event.response.messageAction = "SUPPRESS";
            context.succeed(event);
        }
        else {
            // Return error to Amazon Cognito
            callback("Bad password");
        }
    }
    else { 
        // Return error to Amazon Cognito
        callback("Bad triggerSource " + event.triggerSource);
    }
};
