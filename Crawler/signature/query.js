const query = {
  operationName: "SignatureSummaryList",
  query: `query SignatureSummaryList {
    signatures {
      ...SignatureSummary
      __typename
  }
}

fragment SignatureSummary on Signature {
    _id
    title
    subtitle
    name
    job
    urlAlias
    heroSectionPhrase
    heroSectionImageUUIDs
    heroSectionVideoUUID
    product {
      ...ProductDetail
      __typename
  }
  __typename
}

fragment ProductDetail on Product {
    ...ProductSummary
    type
    fundedAt
    createdAt
    wishlistedCount
    klassId
    klassFirestoreId
    refundPolicy
    recommendations
    subjects
    packageDescription
    mainProductItemFirestoreId
    promotionFirestoreId
    version
    sellingDescription
    difficulty
    categoryTitleDetail
    categoryFirestoreId
    categoryTitle
    description
    coverVideoUrl
    confirmState
    appliedSalesAt
    isConfirmed
    satisfactionRate
    summary
    isHidden
    isSalesModuleLocked
    categoryId
    categoryFirestoreId
    denormalizedPackages {
      ...DenormalizedPackageFull
      __typename
  }
  qnas {
      ...Qna
      __typename
  }
  artWorkSection {
      description
      duration
      artWorks {
        title
        photoUrl
        __typename
    }
    __typename
  }
  skills {
      title
      content
      photoUrl
      __typename
  }
  interviews {
      question
      answer
      photoUrl
      __typename
  }
  promotionId
  promotion {
      ...PromotionSummary
      __typename
  }
  promotions {
      ...PromotionSummary
      __typename
  }
  campaignId
  category {
      _id
      title
      __typename
  }
  ownerUser {
      ...ProductDetailOwnerUser
      __typename
  }
  timelines {
      ...ProductTimeline
      __typename
  }
  previewSurveyUrl
  note
  mediaGalleryId
  __typename
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
      _id
      name
      nickName
      __typename
  }
  __typename
}

fragment DenormalizedPackageFull on DenormalizedPackage {
    _id
    isHidden
    createdAt
    deletedAt
    name
    photoUrl
    paymentOption {
      ...PaymentOption
      __typename
  }
  klassItemStands {
      ...DenormalizedKlassItemStand
      __typename
  }
  kitItemOptionGroupStands {
      ...DenormalizedKitItemOptionGroupStand
      __typename
  }
  kitItemStands {
      ...DenormalizedKitItemStand
      __typename
  }
  shippingSchedule {
      ...ShippingSchedule
      __typename
  }
  __typename
}

fragment PaymentOption on PaymentOption {
    hideWhenInAppBrowser
    canPartialInstallment
    availablePartialInstallmentMonths
    exampleInstallmentMonths
    canApplyPromotion
    __typename
}

fragment DenormalizedKlassItemStand on DenormalizedKlassItemStand {
    id
    discount {
      ...Discount
      __typename
  }
  quantityBoundary {
      ...QuantityBoundary
      __typename
  }
  klassItemId
  denormalizedKlassItem {
      ...DenormalizedKlassItemFull
      __typename
  }
  __typename
}

fragment Discount on Discount {
    type
    fixedAmount
    percentageAmount
    __typename
}

fragment QuantityBoundary on QuantityBoundary {
    min
    max
    __typename
}

fragment DenormalizedKlassItemFull on DenormalizedKlassItem {
    _id
    name
    createdAt
    deletedAt
    storeId
    pricing {
      payoutPolicy {
        ...PayoutPolicy
        __typename
    }
    listPrice
    __typename
  }
  inventory
  availableDays
  klassId
  photoUrl
  contents {
      ...PackageItemContent
      __typename
  }
  store {
      ...KlassStoreFull
      __typename
  }
  note
  __typename
}

fragment PayoutPolicy on PayoutPolicy {
    type
    fixedPayoutAmount
    ratioPayoutAmount
    __typename
}

fragment PackageItemContent on PackageItemContent {
    description
    __typename
}

fragment KlassStoreFull on KlassStore {
    _id
    createdAt
    name
    email
    taxPayerType
    corporateRegistrationNumber
    residentRegistrationNumber
    bankCode
    accountNumber
    accountHolderName
    defaultPayoutPolicy {
      ...PayoutPolicy
      __typename
  }
  creatorIds
  businessSectorCode
  notDepositedPayoutAmountSum
  businessSector
  businessType
  businessAddress
  __typename
}

fragment DenormalizedKitItemOptionGroupStand on DenormalizedKitItemOptionGroupStand {
    id
    discount {
      ...Discount
      __typename
  }
  quantityBoundary {
      ...QuantityBoundary
      __typename
  }
  kitItemOptionGroupId
  denormalizedKitItemOptionGroup {
      ...DenormalizedKitItemOptionGroupFull
      __typename
  }
  __typename
}

fragment DenormalizedKitItemOptionGroupFull on DenormalizedKitItemOptionGroup {
    _id
    name
    createdAt
    deletedAt
    storeId
    photoUrl
    description
    availableOptions {
      ...AvailableOptionFull
      __typename
  }
  kitItems {
      ...KitItemInOptionGroupFull
      __typename
  }
  contents {
      ...PackageItemContent
      __typename
  }
  store {
      ...KitStoreFull
      __typename
  }
  __typename
}

fragment AvailableOptionFull on AvailableOption {
    keyId
    keyName
    optionValues {
      ...OptionValueFull
      __typename
  }
  __typename
}

fragment OptionValueFull on OptionValue {
    valueId
    valueName
    __typename
}

fragment KitItemInOptionGroupFull on KitItemInOptionGroup {
    idInGroup
    pricing {
      payoutPolicy {
        ...PayoutPolicy
        __typename
    }
    listPrice
    __typename
  }
  inventory
  optionSet {
      ...OptionSetItemFull
      __typename
  }
  __typename
}

fragment OptionSetItemFull on OptionSetItem {
    keyId
    keyName
    optionValue {
      ...OptionValueFull
      __typename
  }
  __typename
}

fragment KitStoreFull on KitStore {
    _id
    firestoreId
    createdAt
    name
    email
    taxPayerType
    corporateRegistrationNumber
    residentRegistrationNumber
    bankCode
    accountNumber
    accountHolderName
    defaultPayoutPolicy {
      ...PayoutPolicy
      __typename
  }
  shipperIds
  productIds
  businessSectorCode
  notDepositedPayoutAmountSum
  businessSector
  businessType
  businessAddress
  __typename
}

fragment DenormalizedKitItemStand on DenormalizedKitItemStand {
    id
    discount {
      ...Discount
      __typename
  }
  quantityBoundary {
      ...QuantityBoundary
      __typename
  }
  kitItemId
  denormalizedKitItem {
      ...DenormalizedKitItemFull
      __typename
  }
  __typename
}

fragment DenormalizedKitItemFull on DenormalizedKitItem {
    _id
    name
    createdAt
    deletedAt
    storeId
    photoUrl
    description
    pricing {
      payoutPolicy {
        ...PayoutPolicy
        __typename
    }
    listPrice
    __typename
  }
  inventory
  contents {
      ...PackageItemContent
      __typename
  }
  store {
      ...KitStoreFull
      __typename
  }
  __typename
}

fragment ShippingSchedule on ShippingSchedule {
    startAt
    descriptions
    __typename
}

fragment Qna on Qna {
    question
    answer
    __typename
}

fragment PromotionSummary on Promotion {
    _id
    title
    createdAt
    endAt
    discount {
      ...DiscountFull
      __typename
  }
  __typename
}

fragment DiscountFull on Discount {
    type
    fixedAmount
    percentageAmount
    __typename
}

fragment ProductDetailOwnerUser on User {
    ...UserSummary
    content
    email
    phone
    channels {
      type
      channelId
      url
      __typename
  }
  __typename
}

fragment UserSummary on User {
    _id
    name
    nickName
    __typename
}

fragment ProductTimeline on Timeline {
    content
    createdAt
    type
    name
    user {
      ...UserSummary
      __typename
  }
  __typename
}
`,
  variables: {}
};

module.exports = query;
