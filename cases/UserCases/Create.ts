
const Create = (event, context, callback): void => {
    
    callback(null, {
        statusCode: 500,
        body: JSON.stringify({
            message:"Error"
        })
    })
}

module.exports.CreateUser = Create