export default {
  name: `projects`,
  title: `Projects`,
  type: `document`,
  fields: [
    {
      name: `projectName`,
      title: `Project Name`,
      type: `string`,
      validation: (Rule) => Rule.max(30).warning(`Shorter titles are usually better`),
    },
    {
      name: `slug`,
      title: `url`,
      type: `slug`,
      options: {
        source: `projectName`,
      },
    },
    {
      name: `projectDescription`,
      title: `Project Description`,
      type: `blockContent`,
    },
    {
      name: `projectDate`,
      title: `Project Date`,
      type: `date`,
      options: {
        dateFormat: `DD-MM-YYYY`,
        calendarTodayLabel: `Today`,
      },
    },
    {
      name: `website`,
      title: `Website`,
      type: `url`,
    },
    {
      name: `tags`,
      title: `Tags`,
      type: `array`,
      of: [{type: `reference`, to: [{type: `tags`}]}],
      options: {
        layout: `tags`,
      },
    },
    {
      name: `role`,
      title: `Role`,
      type: `array`,
      of: [{type: `string`}],
      options: {
        layout: `tags`,
      },
    },
    {
      name: `team`,
      title: `Team`,
      type: `array`,
      of: [{type: `string`}],
      options: {
        layout: `tags`,
      },
    },
    {
      name: `techStack`,
      title: `Tech Stack`,
      type: `array`,
      of: [{type: `string`}],
      options: {
        layout: `tags`,
      },
    },
    {
      name: `cover`,
      title: `Cover Image`,
      type: `altImage`,
    },
    {
      name: `images`,
      title: `Images`,
      type: `array`,
      of: [{type: `altImage`}],
    },
    {
      name: `seo`,
      title: `SEO`,
      type: `seo`,
    },
  ],
  preview: {
    select: {
      title: `projectName`,
      media: `images`,
    },
    prepare: ({title, media}) => {
      return {
        title,
        media: media[0],
      }
    },
  },
}
