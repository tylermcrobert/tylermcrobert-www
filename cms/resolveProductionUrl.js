const isDev = process.env.NODE_ENV === 'development'
const projectUrl = isDev ? 'http://localhost:3000' : 'https://tylermcrobert.com'

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?slug=${document.slug.current}&type=${document._type}`
}
