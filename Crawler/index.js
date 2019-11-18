const categoryCrawler = require("./category");
const productCrawler = require("./product");
const collectionCrawler = require("./collection");

function runCrawler() {
    productCrawler();
    // categoryCrawler();
    // curriculumCrawler();
    // collectionCrawler();
}
module.exports = runCrawler;

const trendCrawler = require("./trend");
