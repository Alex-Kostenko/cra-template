import {ApolloCache, DefaultContext, gql, MutationFunctionOptions} from '@apollo/client';

import {FC, useState} from 'react';

import {Card, Comment, Info, Legend, Text} from './style';
import {Button, TextArea} from '@ui';

interface RepoCardProps {
  issue: Issue;
  isLoading: boolean;
  onSave: (options?: MutationFunctionOptions<AddCommentData, AddCommentVars, DefaultContext, ApolloCache<any>> | undefined) => Promise<{}>;
}

const RepoCard: FC<RepoCardProps> = ({issue, onSave, isLoading}) => {
  const [hasCommentBlock, setHasCommentBlock] = useState(false);
  const [comment, setComment] = useState('');

  const handleClick = async () => {
    if (!hasCommentBlock) {
      setHasCommentBlock(!hasCommentBlock);
      return;
    }

    try {
      await onSave({
        variables: {issueId: issue.id, body: comment},
        // not to refetch again, just update data in cache
        update(cache, {data}) {
          if (!data || !issue.id) return;

          const cacheId = cache.identify({id: issue.id, __typename: 'Issue'});

          const existingIssue = cache.readFragment({
            id: cacheId,
            fragment: gql`
              fragment IssueFragment on Issue {
                comments {
                  totalCount
                }
              }
            `,
          }) as Issue;

          if (existingIssue) {
            cache.writeFragment({
              id: cacheId,
              fragment: gql`
                fragment IssueFragment on Issue {
                  comments {
                    totalCount
                  }
                }
              `,
              data: {
                comments: {
                  totalCount: existingIssue.comments.totalCount + 1,
                },
              },
            });
          }
        },
      });
      setComment('');
      setHasCommentBlock(false);
      alert('Comment added successfully!');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <Card>
      <Info>
        <Legend>Info:</Legend>
        <Text>
          Name:
          <a href={issue.url} target='_blank' rel='noopener noreferrer'>
            {issue.title} (#{issue.number})
          </a>
        </Text>
        <Text>Desc: {issue.bodyText}</Text>
        <Text>Creation date: {issue.createdAt}</Text>
        <Text>Number of comments: {issue.comments.totalCount}</Text>
      </Info>
      {hasCommentBlock &&
        (isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <Comment>
            <Legend>New Comment:</Legend>
            <TextArea value={comment} onChange={e => setComment(e.target.value)} />
          </Comment>
        ))}

      <Button text={hasCommentBlock ? 'Save' : 'Add new comment'} onClick={handleClick} />
    </Card>
  );
};

export {RepoCard};
