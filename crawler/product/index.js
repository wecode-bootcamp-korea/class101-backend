const collectionCrawler = require("../collection");
const careerCrawler = require("../career");
const noticeCrawler = require("../notice");
const trendCrawler = require("../trend");
const noticeArr = require("../notice/query");

const getDetails = require("../getDetails");

function productCrawler() {
  // noticeArr.forEach(async el => await getDetails(el));
  collectionCrawler();
  // careerCrawler()
  // trendCrawler();
}

module.exports = productCrawler;
