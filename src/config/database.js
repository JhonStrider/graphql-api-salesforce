const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex;

//knex('users').insert({
//    name: 'Teste', 
//    email:'teste@teste.com.br',
//    password:'teste'
//}).then(data => console.log(data))

knex('users').select('*').then(
    resultado => console.log(resultado)
)


async function connSalesforce(){
    const conSfdc = require('./oAuthSalesforce')
    const tk = await conSfdc.callAutenticationApiSalesforce();
}

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
