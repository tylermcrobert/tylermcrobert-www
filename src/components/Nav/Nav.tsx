import React from "react"
import { Wrapper } from "components"
import Link from "next/link"
import S from "./Nav.Styled"

const Nav = () => {
  return (
    <S.Nav>
      <Wrapper>
        <S.Content>
          <Link href="/">
            <a>Tyler McRobert</a>
          </Link>
          <Link href="/info">
            <a>Info</a>
          </Link>
        </S.Content>
      </Wrapper>
    </S.Nav>
  )
}

export default Nav