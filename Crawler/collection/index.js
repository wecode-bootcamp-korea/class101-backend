const Collection = require("../../api/models/collection");
const query = require("./query");
const axios = require("axios");

function collectionCrawler() {
  axios
    .post("https://gql-prod.class101.net/graphql", query)
    .then(res => {
      res.data.data.collections.forEach(col => {
        console.log(col)
      //   new Collection({
      //     description: col.description,
      //     itemIds: col.itemIds,
      //     score: col.score,
      //     title: col.title
      //   });
      //   //.save();
      //   res.data.data.collections.forEach(el => {
      //     console.log(el.itemIds);
      //   });
      // });
    })
    .catch(err => console.log(err));
}

module.exports = collectionCrawler;
