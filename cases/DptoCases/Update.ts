const Update = (event, context, callback): void => {
    callback(null, {
        statusCode: 200,
        body:JSON.stringify({
            message: "Update correcto"
        })
    })
}

module.exports.UpdateDepartment = Update