const category = {
  operationName: "CategorySummaryList",
  query: `fragment CategorySummary on Category {
  _id
  firestoreId
  title
  iconUrl
  __typename
}

query CategorySummaryList($categoryFilter: PreCategoryFilter!, $limit: Int, $offset: Int) {
  categories: getCategories(categoryFilter: $categoryFilter, limit: $limit, offset: $offset) {
    ...CategorySummary
    __typename
}
}
`,
  variables: {
    categoryFilter: { isHide: false },
    offset: 0,
    limit: 9999
  }
};

module.exports = category;
