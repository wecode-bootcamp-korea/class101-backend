const Category = require("../../api/models/category");
const query = require("./query");
const axios = require("axios");

function categoryCrawler() {
  axios
    .post("https://gql-prod.class101.net/graphql", query)
    .then(res => {
      res.data.data.categories.forEach(async category => {
        await new Category({
          _id: category._id,
          title: category.title,
          iconUrl: category.iconUrl
        }).save();
      });
    })
    .catch(err => console.log(err));
}

module.exports = categoryCrawler;
