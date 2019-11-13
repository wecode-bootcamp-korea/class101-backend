const query = {
  operationName: `HeroBannerSummaryList",
query: "query HeroBannerSummaryList($preFilter: PreHeroBannerFilter!, $limit: Int, $offset: Int, $sort: [PreHeroBannerSorter!]) {
    heroBanners(bannerFilter: $preFilter, limit: $limit, offset: $offset, sort: $sort) {
      ...HeroBannerSummary
      __typename
  }
}

fragment HeroBannerSummary on HeroBanner {
    _id
    title
    description
    backgroundColor
    imageUrl
    link
    score
    displayedOn
    categoryId
    shortTitle
    discountPrice {
      amount
      unit
      __typename
  }
  category {
      title
      __typename
  }
  __typename
}
`,
  variables: {
    preFilter: { displayedOn: "HOME", published: true },
    sort: [{ score: -1 }],
    offset: 0,
    limit: 6
  }
};

module.exports = query;
