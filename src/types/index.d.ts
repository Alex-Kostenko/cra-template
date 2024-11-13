declare interface Issue {
  id: string;
  number: number;
  title: string;
  bodyText: string;
  url: string;
  createdAt: string;
  comments: {
    totalCount: number;
  };
}

declare interface PageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

declare interface IssuesData {
  repository: {
    issues: {
      edges: {node: Issue}[];
      pageInfo: PageInfo;
    };
  };
}

declare interface IssuesVars {
  owner: string;
  name: string;
  after?: string | null;
}

declare interface AddCommentData {
  addComment: {
    commentEdge: {
      node: {
        id: string;
        body: string;
        createdAt: string;
        author: {
          login: string;
        };
      };
    };
  };
}

declare interface AddCommentVars {
  issueId: string;
  body: string;
}
