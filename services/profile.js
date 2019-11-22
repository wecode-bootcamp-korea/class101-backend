const User = require("models/user");
const productUtils = require("utils/product");

exports.findUser = async userId => {
  const user = await User.findOne({ _id: userId })
    .populate({
      path: "purchasedProducts",
      populate: "ownerUser"
    })
    .populate({
      path: "myProduct",
      populate: "ownerUser"
    });

  const { photoUrl: imageUrl, name, _id, purchasedProducts, myProduct } = user;

  const purchased = purchasedProducts
    ? await productUtils.getResponseForList(user.purchasedProducts)
    : [];

  const mine = myProduct
    ? await productUtils.getResponseForList(user.myProduct)
    : [];

  const response = {
    userInfo: {
      name,
      imageUrl,
      _id
    },
    myClass: {
      title: "내가 만든 클래스",
      data: mine
    },
    purchasedProducts: {
      title: "내가 수강 중인 클래스",
      data: purchased
    }
  };

  return response;
};
