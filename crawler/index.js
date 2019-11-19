const categoryCrawler = require("./category");
const productCrawler = require("./product");
const herobannerCrawler = require("./Herobanner");
const collectionCrawler = require("./collection");

function runCrawler() {
  // productCrawler();
  // categoryCrawler();
  // curriculumCrawler();
  collectionCrawler();
}

module.exports = runCrawler;
