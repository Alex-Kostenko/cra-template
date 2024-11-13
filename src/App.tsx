import {useMutation, useQuery} from '@apollo/client';

import {ADD_COMMENT_MUTATION} from './graphQL/mutation';
import {RepoCard} from '@ui';

import {CardWrap} from '@/components/Card/style';
import {GET_ISSUES_QUERY} from '@/graphQL/query';

const owner = process.env.REACT_APP_GITHUB_OWNER || 'wasya243';
const name = process.env.REACT_APP_GITHUB_NAME || 'react-google-sign-in';

function App() {
  const {data, loading, error, fetchMore} = useQuery<IssuesData, IssuesVars>(GET_ISSUES_QUERY, {
    variables: {owner, name},
  });

  const [addComment, {loading: commentLoading, error: commentError}] = useMutation<AddCommentData, AddCommentVars>(ADD_COMMENT_MUTATION);

  const loadMoreIssues = () => {
    if (data?.repository.issues.pageInfo.hasNextPage) {
      fetchMore({
        variables: {after: data.repository.issues.pageInfo.endCursor},
      });
    }
  };

  if (loading) return <p>Loading issues...</p>;
  if (error) return <p>Error fetching issues: {error.message}</p>;
  if (commentError) return <p>Error fetching issues: {commentError.message}</p>;

  return (
    <div>
      <h1>
        Issues for {owner}/{name}
      </h1>
      <CardWrap>{data?.repository.issues.edges.map(edge => <RepoCard issue={edge.node} key={edge.node.id} onSave={addComment} isLoading={commentLoading} />)}</CardWrap>
      {data?.repository.issues.pageInfo.hasNextPage && <button onClick={loadMoreIssues}>Load More</button>}
    </div>
  );
}

export default App;
