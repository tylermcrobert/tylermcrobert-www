import { NextPage } from "next"
import { CaseStudyPicker, Seo, LargeHead, Wrapper } from "components"
import styled from "styled-components"

const DATA = [
  "George Floyd",
  "Tony McDade",
  "Breonna Taylor",
  "Ahmaud Arbery",
  "Freddie Gray",
  "Philando Castile",
  "Emmett Till",
  "Tamir Rice",
  "Eric Garner",
  "Trayvon Martin",
  "Walter Scott",
  "Sandra Bland",
  "Oscar Grant",
  "Ariane McCree",
  "Terrance Franklin",
  "Miles Hall",
  "John Burris",
  "William Green",
  "Samuel David Mallard",
  "Stephon Clark",
  "Antwon Rose",
  "Shameik Moore",
  "Rumain Brisbon",
  "Akai Gurley",
  "Kajieme Powell",
  "Ezell Ford",
  "Dante Parker",
  "John Crawford III",
  "Tyree Woodson",
  "Victor White III.",
]
const Home: NextPage = () => {
  return (
    <>
      <Seo title={null} />
      <Wrapper>
        <LargeHead>
          <Centered>
            <br />
            No <br />
            Justice
            <br />
            No
            <br />
            Peace. <br />
            <br />
          </Centered>
        </LargeHead>
        <LargeHead>{DATA.join(` ● `)}</LargeHead>
      </Wrapper>
    </>
  )
}

const Centered = styled.div`
  text-align: center;

  br {
    display: block !important;
  }
`

export default Home
