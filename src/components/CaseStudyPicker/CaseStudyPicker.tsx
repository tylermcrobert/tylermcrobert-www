import Link from 'next/link'
import { LargeHead, Wrapper } from 'components'
import { NUMBERS } from '../../constants'
import S from './CaseStudyPicker.styled'

const CaseStudyPicker: React.FC = () => {
  return (
    <S.Wrapper>
      <Wrapper>
        <S.Content>
          {[{ uid: 'nike-circularity', title: 'Nike Circularity' }].map(
            (item, i) => (
              <LargeHead key={item.uid}>
                {' '}
                {NUMBERS[i + 1]}&nbsp;
                <Link href="/[page]" as={`/${item.uid}`}>
                  <a>{item.title}</a>
                </Link>
              </LargeHead>
            )
          )}
        </S.Content>
      </Wrapper>
    </S.Wrapper>
  )
}

export default CaseStudyPicker
