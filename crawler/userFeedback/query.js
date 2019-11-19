const query = {
  operationName: "UserMissionFeedbackList",
  query: `query UserMissionFeedbackList($preFilter: PreUserMissionFeedbackFilter!, $limit: Int, $offset: Int) {
        userMissionFeedbacks(preFilter: $preFilter, limit: $limit, offset: $offset) {
          ...UserMissionFeedbackFull
          __typename
      }
      userMissionFeedbackCount(preFilter: $preFilter)
  }
    
    fragment UserMissionFeedbackFull on UserMissionFeedback {
        _id
        firestoreId
        comment
        createdAt
        klassId
        missionId
        missionStepId
        status
        userId
        user {
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
        createdAt
        __typename
    }
    `,
  variables: {
    preFilter: { klassId: "OiZHNUYI0hJHZoiir0Dw", status: "GOOD" },
    offset: 0,
    limit: 100
  }
};

module.exports = query;
