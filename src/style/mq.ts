import { responsiveSizes } from 'style/theme'

export type Size = keyof typeof responsiveSizes

export type Sizes = {
  [item in Size]: number
}

export type MediaQuery = {
  [item in Size]: string
}

const mq = Object.keys(responsiveSizes).reduce(
  (acc, current) => ({
    ...acc,
    [current as Size]: `(min-width: ${Reflect.get(
      responsiveSizes,
      current
    )}px)`,
  }),
  {}
) as MediaQuery

export default mq
