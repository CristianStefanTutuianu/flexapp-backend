const express = require('express');
const graphqlHTTPHandlerCallback = require('express-graphql');

const app = express();
const port = 3999;


app.use("/graphql", graphqlHTTPHandlerCallback({
    // Options schema
}));


app.listen(3999, () => {
    console.log("Listening for requests on port: " + port)
});
