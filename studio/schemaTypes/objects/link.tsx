import {defineField, defineType} from 'sanity'

export const INTERNAL_LINK_TYPES = [{type: 'homepage'}, {type: 'caseStudy'}, {type: 'page'}]

export const link = defineType({
  title: 'Link',
  name: 'link',
  icon: () => '🔗',
  type: 'object',
  validation: (Rule) =>
    Rule.custom((link: any) => {
      const hasLink = link?.href || link?.reference

      if (!hasLink && link?.label) {
        return 'Add either an internal or external link.'
      }

      return true
    }),
  fields: [
    defineField({
      name: 'reference',
      title: 'Internal Link',
      type: 'reference',
      description: 'An internal reference to other Sanity documents',
      to: INTERNAL_LINK_TYPES,
      hidden: ({parent}) => {
        return !!parent?.href
      },
    }),

    defineField({
      name: 'href',
      title: 'External Link URL',
      type: 'url',
      hidden: ({parent}) => {
        return !!parent?.reference
      },
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https', 'tel', 'mailto', '@'],
        }).warning(`This is not an external link. Consider using internal links instead.`),
    }),

    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      ...selectLink(null),
    },
    prepare: (p) => {
      return {
        ...prepareLink(p),
      }
    },
  },
})

export function selectLink(path: string | null) {
  const p = path ? `${path}.` : ''
  return {
    referenceTitle: `${p}reference.title`,
    referenceSlug: `${p}reference.slug.current`,
    referenceType: `${p}reference._type`,
    linkLabel: `${p}label`,
    linkHref: `${p}href`,
  }
}

export function prepareLink(props: Record<keyof ReturnType<typeof selectLink>, any>) {
  return {
    title: props.linkLabel || props.referenceTitle,
    subtitle: props.linkHref || props.referenceSlug || props.referenceType,
  }
}
