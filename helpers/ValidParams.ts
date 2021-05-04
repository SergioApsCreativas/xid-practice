import validator = require('validator');

const validParams = (event) => {
    
    let pType = event.path;
    if(pType.endsWith('all')) pType="all";
    const params = event['body'];
    const queryStringParameters = event.queryStringParameters;
    let arrayErrors:Array<any> = [];
    console.log(pType)
    switch (pType) {
        case '/api/login':
            const { email, password } = JSON.parse(params);

            if(validator.isEmpty(email)) {
                arrayErrors = [...arrayErrors, {
                        field: 'Email',
                        'message': "Your email can't be empty"
                    }
                ]
            }
            if(!validator.isEmail(email)) {
                arrayErrors = [...arrayErrors, {
                        field: 'Email',
                        'message': "Your email is not valid"
                    }
                ]
            }
            if(validator.isEmpty(password)) {
                arrayErrors = [...arrayErrors, {
                        field: 'Password',
                        'message': "Your password can't be empty"
                    }
                ]
            }
            
            return arrayErrors;
        case '/tickets/create':
            const {  departmentid, issue, urgence, clientid} = JSON.parse(params);
            
            if( departmentid === undefined ){
                arrayErrors = [...arrayErrors, {
                    field: 'departmentid',
                    'message': "The departmentid can't be empty"
                }]
            }
            if( issue === undefined || validator.isEmpty(issue)){
                arrayErrors = [...arrayErrors, {
                    field: 'issue',
                    'message': "The issue can't be empty"
                }]
            }
            if(urgence === undefined || validator.isEmpty(urgence)){
                arrayErrors = [...arrayErrors, {
                    field: 'urgence',
                    'message': "The urgence can't be empty"
                }]
            }
            if( clientid === undefined ){
                arrayErrors = [...arrayErrors, {
                    field: 'clientid',
                    'message': "The clientid can't be empty"
                }]
            }
            console.log(arrayErrors);

            return arrayErrors;
        case 'all':
            if(queryStringParameters){
                const { page= "", limit=""} = queryStringParameters;
                if( page === undefined || validator.isEmpty(page)){
                    arrayErrors = [...arrayErrors, {
                        queryParam: 'page',
                        'message': "el parametro page no puede estar vacio",
                    }]
                }
                if( limit === undefined || validator.isEmpty(limit)){
                    arrayErrors = [...arrayErrors, {
                        queryParam: 'limit',
                        'message': "El parametro limit no puede estar vacio"
                    }]
                }
            }else{
                arrayErrors = [...arrayErrors, {
                    queryParam: 'page',
                    'message': "el parametro page es requerido",
                }, {
                    queryParam: 'limit',
                    'message': "El parametro limit es requerido"
                }]
            } 
            return arrayErrors;   
        default:
            return [];
    }
}


export {
    validParams
}