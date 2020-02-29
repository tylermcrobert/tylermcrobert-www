import React from "react"
import { Wrapper } from "components"
import Link from "next/link"
import S from "./Nav.Styled"

const Nav = () => {
  return (
    <S.Nav>
      <Wrapper>
        <Link href="/">
          <a>Tyler McRobert</a>
        </Link>
      </Wrapper>
    </S.Nav>
  )
}

export default Nav
