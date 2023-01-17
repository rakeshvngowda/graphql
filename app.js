const express = require("express");
require("dotenv").config();

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require('mongoose')

const app = express();

mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once('open',()=>{
  console.log('connected to database');
})


// bind the express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log(`listeing to post for new requests ${process.env.PORT}`);
});
