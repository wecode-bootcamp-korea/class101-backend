const Category = require("models/category");
const query = require("./query");
const axios = require("axios");

exports.categoryCrawler = () => {
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
};
