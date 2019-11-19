const query = require("./query");
const axios = require("axios");
//const getDetails = require("./getDetails");
const Product = require("../../api/models/product");

function signatureCrawler() {
  axios
    .post("https://gql-prod.class101.net/graphql", query)
    .then(res => {
      res.data.data.signatures.forEach(el => {
        const prod = el.product;
        const product = new Product({
          title: prod.title,
          coverImageUrl: prod.coverImageUrl,
          willOpenAt: prod.willOpenAt,
          dueDate: prod.dueDate,
          score: prod.score,
          createdAt: prod.createdAt,
          reservationCount: prod.reservationCount,
          wishlistedCount: prod.wishlistedCount,
          packageIds: prod.packageIds,
          defaultPackageId: prod.defaultPackageId,
          curriculum: prod.klassId,
          categoryId: prod.categoryId,
          feedbackCount: prod.feedbackCount,
          feedbackGoodCount: prod.feedbackGoodCount,
          ownerUser: prod.ownerUser,
          recommendations: prod.recommendations,
          packageDescription: prod.packageDescription,
          difficulty: prod.difficulty,
          description: prod.description,
          satisfactionRate: prod.satisfactionRate,
          summary: prod.summary,
          qnas: prod.qnas,
          skills: prod.skills,
          interviews: prod.interviews,
          note: prod.note,
          signature: true
        });
        // .save();
      });
    })
    .catch(err => console.log(err));
}

module.exports = signatureCrawler;
