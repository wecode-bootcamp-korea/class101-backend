const axios = require("axios");
const Curriculum = require("models/curriculum");

function getCurriculum(curriculumId) {
  axios
    .post("https://gql-prod.class101.net/graphql", {
      operationName: "KlassDetailById",
      query: `fragment MissionSummary on Mission {
          _id
          firebaseId
          title
          episode
          isFree
          completeCondition {
            actionType
            __typename
        }
        __typename
    }
      
      fragment MissionStepSummary on MissionStep {
          _id
          title
          subtitle
          isHidden
          imageUrls
          index
          missions {
            ...MissionSummary
            __typename
        }
        __typename
    }
      
      fragment KlassSummary on Klass {
          _id
          firebaseId
          createdAt
          title
          coverImage
          willOpenAt
          productFirebaseId
          shouldHideFeeds
          endAt
          missionSteps {
            ...MissionStepSummary
            __typename
        }
        __typename
    }
      
      fragment FileSectionFull on FileSection {
          attachmentName
          type
          urls
          __typename
      }
      
      fragment CompleteConditionDetail on CompleteCondition {
          actionType
          query
          uncompleteText
          payload {
            lastViewAt
            checklist
            id
            __typename
        }
        __typename
    }
      
      fragment MissionDetail on Mission {
          ...MissionSummary
          klassId
          missionStepId
          isHidden
          isFeedbackRequired
          isArchived
          willOpenAt
          estimation
          videoSection {
            payload {
              uuid
              startAt
              endAt
              provider
              __typename
          }
          __typename
      }
        paragraphSection {
            payload {
              text
              __typename
          }
          __typename
      }
        fileSections {
            ...FileSectionFull
            __typename
        }
        completeCondition {
            ...CompleteConditionDetail
            __typename
        }
        __typename
    }
      
      fragment MissionStepDetail on MissionStep {
          ...MissionStepSummary
          missions {
            ...MissionDetail
            __typename
        }
        __typename
    }
      
      fragment KlassDetail on Klass {
          ...KlassSummary
          missionSteps {
            ...MissionStepDetail
            __typename
        }
        __typename
    }
      
      query KlassDetailById($klassId: ID!) {
          klass: klassById(klassId: $klassId) {
            ...KlassDetail
            __typename
        }
    }
      `,
      variables: { klassId: curriculumId }
    })
    .then(res => {
      const prod = res.data.data.klass;
      const result = new Curriculum({
        _id: prod._id,
        title: prod.title,
        missionSteps: prod.missionSteps,
        willOpenAt: prod.willOpenAt,
        coverImage: prod.coverImage
      });
      // .save();
      // console.log(result);
    })
    .catch(err => console.log(err));
}

module.exports = getCurriculum;
