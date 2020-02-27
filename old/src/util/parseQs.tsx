const parseQs = (search: string) =>
  JSON.parse(
    `{"${decodeURI(search.substring(1))
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')}"}`
  )

export default parseQs
