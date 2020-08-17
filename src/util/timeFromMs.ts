const pad = (number: number) => {
  return number.toString().padStart(2, '0')
}

type format = 'hh:mm:ss' | 'hh:mm' | 'mm:ss'

const timeFromMs = (ms: number, format: format = 'hh:mm:ss'): string => {
  const ss = pad(Math.floor((ms / 1000) % 60))
  const mm = pad(Math.floor((ms / 1000 / 60) % 60))
  const hh = pad(Math.floor(ms / 1000 / 60 / 60))

  if (format === 'hh:mm:ss') return `${hh}:${mm}:${ss}`
  if (format === 'hh:mm') return `${hh}:${mm}`
  return `${mm}:${ss}`
}

export default timeFromMs
