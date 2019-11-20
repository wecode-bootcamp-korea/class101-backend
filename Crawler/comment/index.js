const axios = require("axios");
const Comment = require("models/comment");

exports.commentCrawler = productId => {
  axios
    .post("https://gql-prod.class101.net/graphql", {
      operationName: "PostList",
      query: `query PostList($preFilter: PrePostFilter!, $limit: Int, $offset: Int, $sort: [PrePostSorter!]) {
      posts(prePostFilter: $preFilter, limit: $limit, offset: $offset, sort: $sort) {
        ...PostSummary
        __typename
    }
    postsCount(preFilter: $preFilter)
}
  
  fragment PostSummary on Post {
      _id
      firestoreId
      createdAt
      photoUrl
      videoUUID
      audioUUID
      title
      content
      languageCode
      userId
      likedCount
      type
      important
      missionId
      user {
        ...UserSummary
        __typename
    }
    files {
        ...PostAttachFile
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
  
  fragment PostAttachFile on PostAttachFile {
      fileID
      fileName
      extension
      __typename
  }
  `,
      variables: {
        limit: 100,
        offset: 0,
        preFilter: { productId: productId },
        sort: [{ important: -1 }, { createdAt: -1 }]
      }
    })
    .then(res => {
      res.data.data.posts.forEach(async comment => {
        try {
          const result = await new Comment({
            _id: comment._id,
            content: comment.content,
            user: comment.user,
            likedCount: comment.likedCount,
            productId: productId,
            createdAt: comment.createdAt
          });
          // .save();
          // console.log(result);
        } catch (err) {
          console.log(err);
        }
      });
    })
    .catch(err => console.log(err));
};
