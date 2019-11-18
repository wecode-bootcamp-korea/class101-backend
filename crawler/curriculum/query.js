const careerQuery = require("../career/query");
const collectionQuery = require("../collection/query");
const herobannerQuery = require("../Herobanner/query");
const trendQuery = require("../trend/query");

const getCurriculum = require("../getCurriculum");

module.exports = {
  career: {
    query: careerQuery,
    func: res => {
      res.data.data.products.forEach(async prod => {
        try {
          await getCurriculum(prod.klassId);
        } catch (err) {
          console.log(err);
        }
      });
    }
  },
  collection: { query: collectionQuery.createrList.query },
  herobanner: { query: herobannerQuery },
  trend: {
    query: trendQuery,
    func: res => {
      res.data.data.products.forEach(async prod => {
        try {
          await getCurriculum(prod.klassId);
        } catch (err) {
          console.log(err);
        }
      });
    }
  }
};
