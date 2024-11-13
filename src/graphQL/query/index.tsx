import {gql} from '@apollo/client';

export const GET_ISSUES_QUERY = gql`
  query GetIssues($owner: String!, $name: String!, $after: String) {
    repository(owner: $owner, name: $name) {
      issues(first: 50, after: $after) {
        edges {
          node {
            id
            number
            title
            bodyText
            url
            createdAt
            comments {
              totalCount
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
