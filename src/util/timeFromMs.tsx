const pad = (number: number) => {
  return number.toString().padStart(2, "0")
}
const timeFromMs = (ms: number): string => {
  const seconds = Math.floor((ms / 1000) % 60)
  const minutes = Math.floor((ms / 1000 / 60) % 60)
  const hours = Math.floor(ms / 1000 / 60 / 60)
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

export default timeFromMs
