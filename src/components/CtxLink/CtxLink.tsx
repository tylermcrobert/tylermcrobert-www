import React from "react"
import { Link } from "gatsby"
import { useClientCtx } from "components/ClientContextProvider"

const CtxLink: React.FC<{ to: string }> = ({ to, ...props }) => {
  const { currentCtx } = useClientCtx()
  const destination = currentCtx !== "homepage" ? `${to}?c=${currentCtx}` : to
  return <Link to={destination} {...props} />
}

export default CtxLink
