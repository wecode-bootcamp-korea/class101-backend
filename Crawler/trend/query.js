const query = {
  operationName: "ProductSummaryByIds",
  query: `query ProductSummaryByIds($productIds: [String!]!, $excludeHiddenProduct: Boolean) {
      products: productsByIds(ids: $productIds, excludeHiddenProduct: $excludeHiddenProduct) {
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
    excludeHiddenProduct: true,
    productIds: [
      "5c5d780874eabcfdafd3934e",
      "5cd2bd9880f6734ace22cfc7",
      "5ce1eda980f6734aceeb5c54",
      "5d0b4c1c6a3bd109565c5d46",
      "5ca31ecb6008dd782a5087e7",
      "5c6d481c74eabcfdaf2dd61b",
      "5d37e615125d26d5fbb572a7",
      "5d89652e2cb1a101fc7903cc",
      "5cbd5436cb2728ebe9a3472d",
      "5c5d780a74eabcfdafd39abd"
    ]
  }
};

module.exports = trendQuery;
