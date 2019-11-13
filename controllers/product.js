const Product = require("models/product");
const service = require("services/product");

exports.detail = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await service.getDetails(productId);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};
