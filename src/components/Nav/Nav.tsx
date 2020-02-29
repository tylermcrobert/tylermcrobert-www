import React from "react"
import { Wrapper } from "components"
import Link from "next/link"
import S from "./Nav.Styled"

const Nav = () => {
  return (
    <Wrapper>
      <S.Nav>
        <Link href="/">
          <a>Tyler McRobert</a>
        </Link>
      </S.Nav>
    </Wrapper>
  )
}

export default Nav
