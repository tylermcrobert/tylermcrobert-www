export function toPlainText(items: any) {
  const firstBlock = (items || []).find((block: any) => {
    return block._type === 'block'
  })

  if (!firstBlock) {
    return
  }

  return firstBlock.children
    .filter((child: any) => child._type === 'span')
    .map((span: any) => span.text)
    .join('')
}
