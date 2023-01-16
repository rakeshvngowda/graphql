const express = require("express");
require("dotenv").config();

const graphqlHTTP = require("express-graphql");

const app = express();

// bind the express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    // pass in a schema property
  })
);

app.listen(4000, () => {
  console.log(`listeing to post for new requests ${process.env.PORT}`);
});
