import React, { useEffect, useRef } from "react"
import { navigate, Link } from "gatsby"
import { LargeHead, Html, Wrapper } from "components"
import { useCuration } from "hooks"
import checkMobile from "util/checkMobile"
import S from "./CaseStudyPicker.Styled"
import { NUMBERS } from "../../constants"

const CaseStudyPicker = () => {
  const curation = useCuration()

  return (
    <S.Fixed>
      <S.Wrapper>
        <div>
          {curation.currentCtx.caseStudies.map(({ title, uid }, i) => (
            <li key={title}>
              <LargeHead>
                {" "}
                <Html>{NUMBERS[i]}</Html>&nbsp;
                <Link to={`/${uid}`}>{title}</Link>
              </LargeHead>
            </li>
          ))}
        </div>
      </S.Wrapper>
    </S.Fixed>
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
