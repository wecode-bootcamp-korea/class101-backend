const collections = {
  operationName: "CollectionSummaryList",
  query: `fragment CollectionSummary on Collection {
      _id
      firestoreId
      periodDescription
      startAt
      endAt
      heroImageUrl
      title
      promotionId
      type
      score
      description
      isHidden
      itemType
      itemIds
      __typename
  }
  
  query CollectionSummaryList($preFilter: PreCollectionFilter!, $limit: Int, $offset: Int) {
      collections: collectionsByCollectionFilter(collectionFilter: $preFilter, limit: $limit, offset: $offset) {
        ...CollectionSummary
        __typename
    }
}
  `,
  variables: {
    preFilter: { type: "SET", isHidden: false },
    limit: 5,
    offset: 0
  }
};

module.exports = collections;
