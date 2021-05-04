import {SecretsManager} from 'aws-sdk'
import { DataSecretManager } from '../interfaces/DataSecretManager'

const client = new SecretsManager({
    region: 'us-east-2'
})

export function getSecretManager (SecretId):Promise<string> {
   return new Promise((resolve, reject) => {
       client.getSecretValue({ SecretId:'tickets/prod' }, function(err, data: DataSecretManager) {
           if(err) reject(err)
           console.log("object")
           resolve(JSON.parse(data.SecretString))
        })
   }) 
}