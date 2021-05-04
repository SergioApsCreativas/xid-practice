'use strict'

import {NormalResponse, Response} from '../interfaces'
export function generateResponse (code:Number, data:NormalResponse):Response {
    return {
        status: code,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        body: JSON.stringify(data)
    }
}