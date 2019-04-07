const express = require('express');
const graphqlHTTPHandlerCallback = require('express-graphql');

const app = express();
const port = 3999;
const schema = require('./schema/schema');

/**
 * Middleware
 */
app.use("/graphql", graphqlHTTPHandlerCallback({
    schema,
    graphiql: true
}));


app.listen(3999, () => {
    console.log("Listening for requests on port: " + port)
});
