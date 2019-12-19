const conSfdc = require('./oAuthSalesforce')
const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

// class databaseConfig{

//     constructor(){
//         this.access_token_salesforce();
//     }

//     async access_token_salesforce(){
//         return await conSfdc.callAutenticationApiSalesforce();
//     }
// }

module.exports = knex;
// module.exports = new databaseConfig();

// async function insertTraceFlag(credentials,data) {
//     var request = require('request').defaults({ rejectUnauthorized: false });
//     var options = { method: 'POST',
//             url: credentials.instance_url + '/services/data/v46.0/tooling/sobjects/TraceFlag/',
//             headers: {
//                  authorization: 'Bearer ' +  credentials.access_token,
//                 'content-type': 'application/json' },
//             body: data,
//             json: true 
//     };
//     return new Promise((resolve, reject) => {
//         request.post(options, function(err, resp, body) {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(resp.body);
//             }
//         });
//     })
// }
