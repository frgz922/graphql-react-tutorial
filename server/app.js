const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://frgz:s3cr3t22@cluster0-9l0nl.mongodb.net/graphtest?retryWrites=true&w=majority', { useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.log('connected to database');
})

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listening on port 4000.');
})