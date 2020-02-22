const timeFromMs = (millis: number): string => {
  const minutes = Math.floor(millis / 60000)
  const seconds = parseInt(((millis % 60000) / 1000).toFixed(0), 0)
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}

export default timeFromMs
