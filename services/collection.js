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

  return Promise.all(
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
};
