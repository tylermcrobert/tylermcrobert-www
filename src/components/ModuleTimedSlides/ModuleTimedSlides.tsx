import React, { useEffect, useState } from 'react'
import { TimedSlides } from 'types'
import getResponsiveImgProps from 'util/getResponsiveImgProps'
import { useTimer } from 'use-timer'
import S from './ModuleTimedSlides.Styled'

export const inc = (index: number, length: number) => (index + 1) % length

const ModuleTimedSlides: React.FC<{ data: TimedSlides }> = ({ data }) => {
  const { time, start } = useTimer({ interval: (data.seconds || 0) * 1000 })
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const newIndex = inc(index, data.images?.length || 0)
    setIndex(newIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, data.images?.length])

  useEffect(() => {
    start()
  }, [start])

  if (!data.images?.length) return null
  return (
    <S.Wrapper color={data.theme?.background?.hex || 'black'}>
      {data.images.map(
        (item, i) =>
          item.asset && (
            <S.Image
              visible={i === index}
              key={i}
              {...getResponsiveImgProps({
                img: item,
                sizes: { xxs: '80vw' },
                aspect: data.aspect,
              })}
            />
          )
      )}
    </S.Wrapper>
  )
}

export default ModuleTimedSlides
