import {defineType} from 'sanity'

export const INTERNAL_LINK_TYPES = [{type: 'page'}, {type: 'homepage'}]

export default defineType({
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
    {
      name: 'reference',
      title: 'Internal Link',
      type: 'reference',
      description: 'An internal reference to other Sanity documents',
      to: [{type: 'page'}, {type: 'homepage'}],
      hidden: ({parent}) => {
        return !!parent?.href
      },
    },

    {
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
    },

    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
  ],
  preview: {
    select: {
      referenceTitle: 'reference.title',
      referenceSlug: 'reference.slug.current',
      title: 'label',
      href: 'href',
      type: 'reference._type',
    },
    prepare: ({referenceTitle, referenceSlug, title, href, type}) => {
      return {
        title: title || referenceTitle,
        subtitle: referenceSlug || href || type,
      }
    },
  },
})

export function selectLink(path: string | null) {
  const p = path ? `${path}.` : ''
  return {
    title: `${p}reference.title`,
    label: `${p}label`,
    slug: `${p}reference.slug.current`,
    href: `${p}href`,
    type: `${p}reference._type`,
  }
}

export function prepareLink(props: Record<keyof ReturnType<typeof selectLink>, any>) {
  return {
    title: props.label || props.title,
    subtitle: props.href || props.type,
  }
}
