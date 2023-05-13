import express from 'express';
import path from'path';
const app = express()
const port = 3000

import axios from "axios";

axios.get("https://api.geckoterminal.com/api/v2/networks/bsc/pools/0x8A7292E9ba068ec5221e4b5d491251a5b06762CC").then(response => {
const price = response.data.data.attributes.base_token_price_usd * 1000000
  app.get('/', function(req, res) {
  res.send(String(price))
});
})
// Render Html File


app.listen(port, () => {
  // Code.....
})
