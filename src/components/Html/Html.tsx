/* eslint-disable react/no-danger */
import React from "react"

interface IProps {
  className?: string
  children: string
}

const Html: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: children }} />
  )
}

export default Html
