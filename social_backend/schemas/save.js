export default {
  name: 'save',
  title: 'Save',
  type: 'document',
  fields: [
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      name: 'userId',
      title: 'UserId',
      type: 'string',
    },
  ],
}
