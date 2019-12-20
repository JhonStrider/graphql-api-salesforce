const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./api/schema')
const schemaAccount = require('./Account/schema')

const app = express()
app.use('/api', graphqlHTTP({
    schema,
    graphiql: true
}))

app.use('/apiAccount', graphqlHTTP({
    schemaAccount,
    graphiql: true
}))

app.listen(4000, () => console.log('Executando...'))