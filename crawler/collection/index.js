const Collection = require("models/collection");
const query = require("./query");
const axios = require("axios");
const getDetails = require("../getDetails");
const Product = require("models/product");

collectionCrawler = function() {
  axios
    .post(
      "https://gql-prod.class101.net/graphql",
      query.newCollectionList.query
    )
    .then(res => {
      res.data.data.collections.forEach(async col => {
        const items = await getItems(col.itemIds);
        const result = new Collection({
          _id: col._id,
          description: col.description,
          itemIds: items,
          score: col.score,
          title: col.title,
          imageUrl: col.heroImageUrl
        }).save();
        // col.itemIds.forEach(el => {
        //   getDetails(el);
        // });
      });
    })
    .catch(err => console.log(err));
};

module.exports = collectionCrawler;

const getItems = async arr => {
  let itemIdArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith("5")) {
      const product = await Product.findOne({ _id: arr[i] }).select("_id");
      itemIdArr.push(product._id);
    } else {
      const product = await Product.findOne({
        fireStoreId: arr[i]
      }).select("_id");
      itemIdArr.push(product._id);
    }
  }
  return itemIdArr;
};
