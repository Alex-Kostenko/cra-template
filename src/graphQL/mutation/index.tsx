import {gql} from '@apollo/client';

export const ADD_COMMENT_MUTATION = gql`
  mutation AddComment($issueId: ID!, $body: String!) {
    addComment(input: {subjectId: $issueId, body: $body}) {
      commentEdge {
        node {
          id
          body
          createdAt
          author {
            login
          }
        }
      }
    }
  }
`;
