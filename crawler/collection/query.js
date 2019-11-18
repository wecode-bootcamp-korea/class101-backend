module.exports = {
  collectionList: {
    query: {
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
        limit: 100,
        offset: 0
      }
    }
  },
  newCollectionList: {
    query: {
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
        limit: 100,
        offset: 5
      }
    }
  },
  createrList: {
    query: {
      operationName: "CollectionSummaryByIds",
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
    
    query CollectionSummaryByIds($collectionIds: [String!]!) {
        collections: collectionsByIds(ids: $collectionIds) {
          ...CollectionSummary
          __typename
      }
    }
    `,
      variables: {
        collectionIds: [
          "5c8faf80a04111049baf1f9d",
          "5c8faed45add880d6389d2d9",
          "5c8fae985add880d6389cc2e",
          "5d2af3db3c6b391ca80f19a7"
        ]
      }
    }
  }
};
