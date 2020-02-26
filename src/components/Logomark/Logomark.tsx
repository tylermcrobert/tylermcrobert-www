import React from "react"

const Logomark = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224 226" {...props}>
      <path
        style={{ width: "100%" }}
        d="M62 26l100 174M25 163L199 63M62 200L162 26"
        stroke="#231F20"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Logomark
