const Collection = require("models/collection");
const productUtil = require("utils/product");

exports.paginatedCollection = async (page, limit) => {
  const start = (page - 1) * limit;
  const end = page * limit;

  let collections = await Collection.find()
    .populate(
      "itemIds",
      "coverImageUrl ownerUser willOpenAt feedbackCount feedbackGoodCount wishlistedCount title categoryId"
    )
    .sort("-score");

  let pageData = {};

  pageData["next"] = end < collections.length && {
    page: page + 1,
    limit: limit
  };

  const response = await Promise.all(
    collections.slice(start, end).map(async collection => {
      const { title, _id, description, itemIds } = collection;

      const data = await productUtil.getResponseForList(itemIds);

      return {
        title,
        _id,
        description,
        data
      };
    })
  );

  response.unshift(pageData);

  return response;
};
