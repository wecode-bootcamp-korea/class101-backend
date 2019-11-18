const Collection = require("models/collection");
const getProducts = require("utils/getProducts");

exports.paginatedCollection = async (page, limit) => {
  const start = (page - 1) * limit;
  const end = page * limit;

  let collections = await Collection.find()
    .populate(
      "itemIds",
      "coverImageUrl ownerUser willOpenAt feedbackCount feedbackGoodCount wishlistedCount title categoryId"
    )
    .sort("-score");

  let response = [];

  for (const prod of collections.slice(start, end)) {
    let result = {};
    if (end < collections.length) {
      result["next"] = {
        page: page + 1,
        limit: limit
      };
    }
    if (start > 0) {
      result["previous"] = {
        page: page - 1,
        limit: limit
      };
    }
    result["title"] = prod.title;
    result["_id"] = prod._id;
    result["description"] = prod.description;
    result["data"] = await getProducts.getResponseForList(prod.itemIds);
    response.push(result);
  }
  return response;
};
