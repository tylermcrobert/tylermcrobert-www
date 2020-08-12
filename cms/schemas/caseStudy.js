export default {
  type: "document",
  name: "caseStudy",
  fields: [
    {
      type: "slug",
      name: "slug",
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "modules",
      type: "array",
      of: [
        {
          name: "singleImage",
          type: "object",
          fields: [
            {
              name: "image",
              type: "image",
            },
          ],
        },
        {
          name: "doubleImage",
          type: "object",
          fields: [
            {
              name: "leftImage",
              type: "image",
            },
            {
              name: "rightImage",
              type: "image",
            },
          ],
        },
        {
          name: "tripleImage",
          type: "object",
          fields: [
            {
              name: "mainImage",
              type: "image",
            },
            {
              name: "secondaryImage1",
              type: "image",
            },
            {
              name: "secondaryImage2",
              type: "image",
            },
          ],
        },
      ],
    },
  ],
}
