const resolvers = require ('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')
const conSfdc = require('../config/oAuthSalesforce')

class schema {

    constructor(){
        //const schema_salesforce =  this.token_parm();
    }

    async token_parm(){
        const resolvers = require ('./resolvers')
        const { makeExecutableSchema } = require('graphql-tools')

        const credenciais = await conSfdc.callAutenticationApiSalesforce(); 
        const schemaAccount =  await this.schemaAccountSalesforce(credenciais);

        const Attribs =  ` ${schemaAccount} `;
        const typeDefs = `
            type Attribs {
                ${Attribs}
            }
            type Query {
                getUsers: [Attribs]
            }
            input UserInput {
                ${Attribs}
            }
        `
        return typeDefs;
    } 
    
    async schemaAccountSalesforce(credentials) {
        let data = {"objeto": "s"};
        var request = require('request').defaults({ rejectUnauthorized: false });
        var options = { method: 'POST',
                url: credentials.instance_url + '/services/apexrest/structObjects',
                headers: {
                    authorization: 'Bearer ' +  credentials.access_token,
                    'content-type': 'application/json' },
                body: data,
                json: true 
        };
        return new Promise((resolve, reject) => {
            request.post(options, function(err, resp, body) {
                if (err) {
                    reject(err);
                } else {
                    resolve(resp.body);
                }
            });
        })
    }

}

module.exports = new schema();

module.exports = async function() {

    const schema = new schema().token_parm();
    const executableSchema = makeRemoteExecutableSchema({
      schema,
      resolvers,
    });
  
    return executableSchema
}

