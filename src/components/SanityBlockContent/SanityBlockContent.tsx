import { SanityBlockContent } from 'types'
const BlockContentToReact = require('@sanity/block-content-to-react')
// import S from './SanityBlockContent.Styled'

const BlockContent: React.FC<{
  blocks: SanityBlockContent
}> = ({ blocks, ...props }) => {
  return <BlockContentToReact blocks={blocks} {...props} />
}

export default BlockContent
