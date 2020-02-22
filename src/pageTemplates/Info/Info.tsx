import React from "react"
import { LargeHead, Grid } from "components"
import S from "./Info.Styled"

interface IProps {
  clients: string[]
}

const Info: React.FC<IProps> = ({ clients }) => {
  return (
    <>
      <S.Wrapper>
        <Grid>
          <S.Intro>
            <LargeHead>
              <em>Bio</em>&rarr;I&apos;m Tyler McRobert, a midwest–born designer
              living in Portland, OR. Currently taking over the world at{" "}
              <a href="http://this.design">This.</a>
            </LargeHead>
          </S.Intro>

          <S.IndentedCopy>
            <p>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Curabitur blandit tempus
              porttitor.
            </p>
          </S.IndentedCopy>

          <S.Copy>
            &#9679; CLIENTS
            <br />
            <br />
            <S.TwoCol>
              {clients.map(client => (
                <p key={client}>{client}</p>
              ))}
            </S.TwoCol>
          </S.Copy>

          <S.Copy>
            <p>
              &#9679; E-M→
              <a href="mailto:hello@tylermcrobert.com">
                hello@tylermcrobert.com
              </a>
            </p>
            <p>
              &#9679; IG→
              <a href="http://instagram.com/tylermcrobert">
                @tylermcrobert
              </a>{" "}
            </p>
          </S.Copy>
        </Grid>
      </S.Wrapper>
    </>
  )
}

export default Info
