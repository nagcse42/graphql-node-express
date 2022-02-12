const express = require("express");
const app = express();
const PORT = 8080;
const graphql = require("graphql");
const {graphqlHTTP} = require("express-graphql");
const schema = require('./grphql/index')

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(PORT, ()=>{
    console.log("Server running on port : "+PORT);
})