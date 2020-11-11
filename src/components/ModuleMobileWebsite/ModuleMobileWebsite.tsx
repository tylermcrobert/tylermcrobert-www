import { Media } from 'components/ModuleWebsite/ModuleWebsite'
import React from 'react'
import {
  ModuleMobileWebsite as ModuleMobileWebsiteType,
  WebsiteMedia,
} from 'types'
import S from './ModuleMobileWebsite.Styled'

const ModuleMobileWebsite: React.FC<{
  data: ModuleMobileWebsiteType
}> = ({ data }) => {
  return (
    <S.Wrapper>
      {data.frames.map(frame => (
        <Item frame={frame} key={frame._key} />
      ))}
    </S.Wrapper>
  )
}

const Item: React.FC<{ frame: WebsiteMedia }> = ({ frame }) => {
  // const itemRef = useRef<HTMLDivElement>(null)
  // const [fillet, setFillet] = useState<number>(0)

  // useEffect(() => {
  //   if (!itemRef.current) return
  //   setFillet(Math.round(itemRef.current.clientWidth / 40))
  // }, [])

  return (
    <div
    // ref={itemRef} style={{ borderRadius: `${fillet}px` }}
    >
      <Media data={frame} />
    </div>
  )
}

export default ModuleMobileWebsite
