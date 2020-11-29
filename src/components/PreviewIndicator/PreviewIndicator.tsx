import React, { useEffect, useState } from 'react'
import S from './PreviewIndicator.Styled'

const PreviewIndicator = () => {
  const [isEnabled, setEnabled] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEnabled(false)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [isEnabled])

  return (
    <S.Wrapper enabled={isEnabled} onMouseOver={() => setEnabled(true)}>
      <div>
        Draft Preview <a href="/api/clear-preview">[X]</a>
      </div>
    </S.Wrapper>
  )
}

export default PreviewIndicator
