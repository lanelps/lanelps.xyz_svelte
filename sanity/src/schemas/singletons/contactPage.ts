export default {
  name: `contactPage`,
  title: `Contact Page`,
  type: `document`,
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`,
    },
    {
      name: `body`,
      title: `Body`,
      type: `blockContent`,
    },
    {
      name: `seo`,
      title: `SEO`,
      type: `seo`,
    },
  ],
}
