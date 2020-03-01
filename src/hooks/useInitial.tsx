import { useRef } from "react"

const useInitial = input => {
  const ref = useRef(input)
  return ref.current
}

export default useInitial
