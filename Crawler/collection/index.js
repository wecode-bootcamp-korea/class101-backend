const Collection = require("models/collection");
const query = require("./query");
const axios = require("axios");
const getDetails = require("../getDetails");

exports.collectionCrawler = () => {
  axios
    .post("https://gql-prod.class101.net/graphql", query.createrList.query)
    .then(res => {
      res.data.data.collections.forEach(async col => {
        // const result = new Collection({
        //   _id: col._id,
        //   description: col.description,
        //   itemIds: col.itemIds,
        //   score: col.score,
        //   title: col.title,
        //   imageUrl: col.heroImageUrl
        // });
        // .save();
        // console.log(result);
        col.itemIds.forEach(el => {
          getDetails(el);
        });
      });
    })
    .catch(err => console.log(err));
};
