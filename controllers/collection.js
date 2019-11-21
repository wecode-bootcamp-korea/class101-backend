const collectionService = require("services/collection");

exports.list = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const response = await collectionService.paginatedCollection(page, limit);

    !response.length
      ? res.status(400).json({ error: "Wrong Pagination" })
      : res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
