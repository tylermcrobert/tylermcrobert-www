const getCookieValue = (cookieStr: string, str: string) => {
  const b = cookieStr.match(`(^|[^;]+)\\s*${str}\\s*=\\s*([^;]+)`)
  return b ? b.pop() : ""
}

export default getCookieValue
