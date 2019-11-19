const axios = require("axios");
const query = require("./query");
const getDetail = require("../getDetails");

function trendCrawler() {
  axios.post("https://gql-prod.class101.net/graphql", query).then(res => {
    res.data.data.products.forEach(async el => {
      await getDetail(el.firestoreId);
    });
  });
}

module.exports = trendCrawler;
