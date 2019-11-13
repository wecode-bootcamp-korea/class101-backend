const Collection = require("models/collection");
const common = require("common");

exports.paginatedCollection = async (page, limit) => {
  const start = (page - 1) * limit;
  const end = page * limit;

  let collections = await Collection.find()
    .populate(
      "itemIds",
      "coverImageUrl ownerUser willOpenAt feedbackCount feedbackGoodCount wishlistedCount title categoryId"
    )
    .sort("-score");

  const response = {};

  if (end < collections.length) {
    response.next = {
      page: page + 1,
      limit: limit
    };
  }
  if (start > 0) {
    response.previous = {
      page: page - 1,
      limit: limit
    };
  }

  collections.slice(start, end).forEach(prod => {
    response[prod.title] = {
      _id: prod._id,
      description: prod.description,
      data: common.getResponseForList(prod.itemIds)
    };
  });

  return response;
};
