'use strict';
import { Department } from '../../models';
import { generateResponse } from '../../helpers/GenerateResponse';
module.exports.All = async (event, context, callback) => {
    try{
        
        const {page = 0, limit = "10"} = event.queryStringParameters;
        const query = await Department.findAll({
            limit: limit<=100 ? Number.parseInt(limit): 10, 
            offset: page>1 ? (Number.parseInt(page)-1)*limit: 0
        });
        callback(null, generateResponse(200, {message: "Departamentos encontrados", data: query}))
    }catch(e) {
        callback(null, generateResponse(500, {message: "error en la peticion", error: e.stack}))
    }
}