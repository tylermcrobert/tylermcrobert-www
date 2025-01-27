import {defineType} from 'sanity'

const ASPECT = [
  [5, 4],
  [4, 3],
  [3, 2],
  [16, 10],
  [16, 9],
]

const format = ([a, b]: number[]) => ({
  num: Math.round((a / b) * 100) / 100,
  aspect: `${a > b ? 'Landscape' : 'Portrait'} - ${a}:${b}`,
})

const reversedAspect = ASPECT.map(([a, b]) => [b, a])
const aspects = [...ASPECT.map(format), ...reversedAspect.map(format)]

const aspect = defineType({
  title: 'Aspect Ratio',
  name: 'aspect',
  type: 'number',
  options: {
    list: aspects.map(({num, aspect}) => ({
      value: num,
      title: aspect,
    })),
  },
})

export default aspect
