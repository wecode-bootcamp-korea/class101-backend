const query = require("../collection/query");
const axios = require("axios");
const getCurriculum = require("../getCurriculum");
const getDetails = require("../getDetails");
const feedbackCrawler = require("..");

exports.curriculumCrawler = () => {
  axios
    .post("https://gql-prod.class101.net/graphql", query.collectionList.query)
    .then(res => {
      res.data.data.collections.forEach(data => {
        data.itemIds.forEach(el => {
          getDetails(el);
        });
      });
    })
    .catch(err => console.log(err));
};
