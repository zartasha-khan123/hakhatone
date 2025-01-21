// schemas/comment.ts
export const Comment = {
    title: 'Comment',
    name: 'comment',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
      {
        name: 'message',
        type: 'text',
        title: 'Message',
      },
      {
        name: 'paramsId',
        type: 'string',
        title: 'Blog ID',
      },
    ],
  }