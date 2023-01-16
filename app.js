const express = require("express");
require("dotenv").config();

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const app = express();

// bind the express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);

app.listen(4000, () => {
  console.log(`listeing to post for new requests ${process.env.PORT}`);
});
