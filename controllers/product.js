const Product = require("models/product");
const productService = require("services/product");

exports.detail = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await productService.getDetails(productId);

    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ error: `Wrong Product Id ${err.value}` });
  }
};
