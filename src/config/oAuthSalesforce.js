const env = require('./../.env')

class oAuthSalesforce {
    async callAutenticationApiSalesforce(){
        
        var request = require('request').defaults({ rejectUnauthorized: false });
        
        let options = {

            method: 'POST',
            url: 'https://login.salesforce.com/services/oauth2/token',
            qs: { grant_type: 'refresh_token',
                client_id:env.client_id,
                client_secret: env.client_secret,
                refresh_token: env.refresh_token
            },
            headers: {
                    'content-type': 'application/json' 
                    }
        };
        
        return new Promise((resolve, reject) => {
            request.post(options, function(err, resp, body) {
                if (err) {
                    reject(err);
                } else {
                    resolve(JSON.parse(resp.body));
                    console.log(resp.body);
                }
            });
        })
    }
}

module.exports = new oAuthSalesforce;