export default {
  name: 'tags',
  title: 'Tags',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
  preview: {
    select: {
      name: `name`,
    },
    prepare: ({name}) => {
      return {
        title: name,
      }
    },
  },
}
