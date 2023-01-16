const express = require("express");
require("dotenv").config();
const app = express();

app.listen(4000, () => {
  console.log(`listeing to post for new requests ${process.env.PORT}`);
});
