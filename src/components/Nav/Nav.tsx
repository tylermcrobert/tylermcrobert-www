/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useContext, useState } from "react"
import { DataCtx } from "pages/_app"
import { Wrapper } from "components"
import Link from "next/link"
import Cookies from "js-cookie"
import Router from "next/router"
import { UNICODE } from "../../constants"
import S from "./Nav.Styled"

const Nav = () => {
  return (
    <S.Nav>
      <Wrapper>
        <S.Content>
          <div>
            <Link href="/">
              <a>Tyler McRobert</a>
            </Link>
            <CurationNav />
          </div>
          <Link href="/info">
            <a>Info</a>
          </Link>
        </S.Content>
      </Wrapper>
    </S.Nav>
  )
}

const CurationNav = () => {
  const curationUid = Cookies.get("curation")
  const [isHover, setHover] = useState<boolean>(false)
  const clearCookie = () => {
    Cookies.remove("curation")
    Router.push("/")
  }

  if (curationUid) {
    const { ctxRes } = useContext(DataCtx)
    const name = ctxRes.results.filter(item => item.uid === curationUid)[0].data
      .context_name[0].text

    return (
      <span
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={clearCookie}
      >
        {" "}
        {UNICODE.X} {name} {isHover && <span>(close)</span>}
      </span>
    )
  }
  return null
}

export default Nav
