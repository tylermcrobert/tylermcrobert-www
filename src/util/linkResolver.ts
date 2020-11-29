const linkResolver = (type: string, slug: string): string => {
  switch (type) {
    case 'caseStudy':
      return `/${slug}`
    default:
      return '/'
  }
}

export const routeResolver = (type: string): string => {
  switch (type) {
    case 'caseStudy':
      return `/[handle]`
    default:
      return '/'
  }
}

export default linkResolver
