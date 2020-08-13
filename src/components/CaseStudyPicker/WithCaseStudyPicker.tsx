import React, { useRef, useEffect } from 'react'
import { isMobile } from '../../util'
import Router from 'next/router'
import CaseStudyPicker from './CaseStudyPicker'
import S from './WithCaseStudyPicker.Styled'

const PickerWrapper: React.FC = ({ children }) => {
  const pickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (pickerRef.current) {
        const { y } = pickerRef.current.getBoundingClientRect()
        const isScrolled = Math.floor(y) <= 0

        if (isScrolled && !isMobile) {
          Router.push('/')
        }
      }
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <S.Wrapper>
        <div>{children}</div>
        <div ref={pickerRef} />
      </S.Wrapper>
      <CaseStudyPicker />
    </>
  )
}

export default PickerWrapper
