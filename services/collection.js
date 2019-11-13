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

  collections.slice(start, end).forEach(prod => {
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
    result["data"] = getProducts.getResponseForList(prod.itemIds);
    response.push(result);
  });

  return response;
};

[
  {
    _id: 0,
    title: `실로 엮는 따뜻한 시간`,
    description: `기초부터 시작해서 스웨터, 뜨개인형을 만들어봐요`,
    data: [
      {
        _id: 1,
        imageUrl: `https://cdn.class101.net/images/e75739ae-85d0-42f0-8496-2a28226c7a43/320xauto(6 kB)`,
        title: `스마트스토어로 월 100만원 만들기, 평범한 사람이 돈을 만드는 비법`,
        categoryCreater: `커리어 ・ 신사임당`,
        likeCount: `1000`,
        rating: `99%`
      },
      {
        _id: 2,
        imageUrl: `https://cdn.class101.net/images/274799d9-cfcf-4b74-9e09-d8b28b53fb0a/320xauto(131 kB)`,
        title: `코바늘로 인형을 만들자! 시은맘의 꼼지락 작업실 안녕하세요`,
        categoryCreater: `By. 시은맘`,
        likeCount: `1001`,
        rating: `99%`
      }
    ]
  }
];
