import React, { useEffect, useRef } from "react"
import { navigate } from "gatsby"
import { LargeHead, Html, CtxLink } from "components"
import { useCuration } from "hooks"
import checkMobile from "util/checkMobile"
import S from "./CaseStudyPicker.Styled"
import { NUMBERS } from "../../constants"

const { RichText } = require("prismic-reactjs")

const CaseStudyPicker = () => {
  const curation = useCuration()

  return (
    <S.Wrapper>
      <div>
        {curation.currentCtx.caseStudies.map(({ title, uid }, i) => (
          <li key={title}>
            <LargeHead>
              {" "}
              <Html>{NUMBERS[i]}</Html>&nbsp;
              <CtxLink to={`/${uid}`}>{title}</CtxLink>
            </LargeHead>
          </li>
        ))}
      </div>
    </S.Wrapper>
  )
}

export const WithPicker: React.FC = ({ children }) => {
  const pickerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleScroll = () => {
      if (pickerRef.current) {
        const { y } = pickerRef.current.getBoundingClientRect()
        const isScrolled = Math.floor(y) <= 0
        const isMobile = checkMobile()

        if (isScrolled && !isMobile) {
          navigate("/")
        }
      }
    }

    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <>
      <S.PageWrapper>{children}</S.PageWrapper>
      <S.PickerWrapper ref={pickerRef}>
        <S.FixedPicker>
          <CaseStudyPicker />
        </S.FixedPicker>
      </S.PickerWrapper>
    </>
  )
}

export default CaseStudyPicker
