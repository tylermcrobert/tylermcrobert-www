import React from "react"
import { Link } from "gatsby"
import { useCuration } from "hooks"

const CtxLink: React.FC<{ to: string }> = ({ to, ...props }) => {
  const { currentCtx } = useCuration()
  const destination =
    currentCtx.uid !== "homepage" ? `${to}?c=${currentCtx.uid}` : to
  return <Link to={destination} {...props} />
}

export default CtxLink
