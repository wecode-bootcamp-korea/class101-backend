const arr = require("./query");
const axios = require("axios");
const getDetails = require("../getDetails");

function noticeCrawler() {
  axios
    .post("https://gql-prod.class101.net/graphql", arr)
    .then(res => {
      const classes = [];
      arr.forEach(el => {
        getDetails(el);
      });
      // res.data.data.products.forEach(pro => {
      //   classes.push(pro._id);
      // });
      // classes.forEach(async classId => {
      //   await getDetails(classId);
      // });
    })
    .catch(err => console.log(err));
}

module.exports = noticeCrawler;
