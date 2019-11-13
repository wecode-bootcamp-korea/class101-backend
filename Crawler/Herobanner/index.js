const axios = require("axios");
const query = require("./query");
const HeroBanner = require("models/heroBanners");

function herobannerCrawler() {
  axios
    .post("https://gql-prod.class101.net/graphql", query)
    .then(res => {
      res.data.data.heroBanners.forEach(async el => {
        const result = await new HeroBanner({
          _id: el._id,
          title: el.title,
          description: el.description,
          backgroundColor: el.backgroundColor,
          imageUrl: el.imageUrl,
          score: el.score,
          shortTitle: el.shortTitle
        });
        // .save();
        console.log(result);
      });
    })
    .catch(err => console.log(err));
}

module.exports = herobannerCrawler;
