const career = {
  operationName: "PreviewProductSummaryList",
  query: `query PreviewProductSummaryList($limit: Int, $offset: Int, $sort: [PreProductSorter!]) {
        products(productFilter: {isHidden: false, state: [preview]}, limit: $limit, offset: $offset, sort: $sort) {
          ...ProductSummary
          __typename
      }
  }
    
    fragment ProductSummary on Product {
        _id
        firestoreId
        title
        coverImageUrl
        coverVideoUrl
        state
        confirmState
        willOpenAt
        dueDate
        score
        previewedAt
        createdAt
        deletedAt
        reservationCount
        wishlistedCount
        ownerUserFirestoreId
        packageIds
        defaultPackageId
        klassId
        categoryFirestoreId
        categoryId
        categoryTitle
        categoryTitleDetail
        mdCategory
        isHidden
        brand
        feedbackCount
        feedbackGoodCount
        track
        ownerUser {
          ...UserSummary
          __typename
      }
      __typename
  }
    
    fragment UserSummary on User {
        _id
        firestoreId
        name
        nickName
        photoUrl
        __typename
    }
    `,
  variables: {
    limit: 20,
    offset: 0,
    sort: [{ score: -1 }, { previewedAt: -1 }, { createdAt: -1 }]
  }
};

module.exports = career;
