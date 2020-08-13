import Link from 'next/link'
import { LargeHead, Wrapper } from 'components'
import { NUMBERS } from '../../constants'
import S from './CaseStudyPicker.styled'
import { useApp } from 'hooks'
import { CsContext } from 'types'

const CaseStudyPicker: React.FC<{ context?: CsContext }> = ({ context }) => {
  const { context: defaultContext } = useApp()

  return (
    <S.Wrapper>
      <Wrapper>
        <S.Content>
          {(context || defaultContext).caseStudies.map((item, i) => (
            <LargeHead key={item.slug.current}>
              {' '}
              {NUMBERS[i + 1]}&nbsp;
              <Link href="/[page]" as={`/${item.slug.current}`}>
                <a>{item.title}</a>
              </Link>
            </LargeHead>
          ))}
        </S.Content>
      </Wrapper>
    </S.Wrapper>
  )
}

export default CaseStudyPicker
