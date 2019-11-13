const axios = require("axios");

function feedbackCrawler(klassId) {
  axios
    .post("https://gql-prod.class101.net/graphql", {
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
        preFilter: { klassId: klassId, status: "GOOD" },
        offset: 0,
        limit: 100
      }
    })
    .then(res => {
      const prod = res.data.data;
      console.log(prod);
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = feedbackCrawler;
