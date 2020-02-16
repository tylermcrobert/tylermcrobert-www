import React from "react"
// eslint-disable-next-line no-unused-vars
import { IText } from "templates/casestudy"
import { Grid, Paragraph, Section } from "components"
import S from "./Styled"

const { RichText } = require("prismic-reactjs")

interface IProps {
  data: IText
}
const Text: React.FC<IProps> = ({ data }) => {
  return (
    <Grid>
      <S.ParagraphWrapper>
        <Section>
          <Paragraph>{RichText.render(data.primary.paragraph)}</Paragraph>
        </Section>
      </S.ParagraphWrapper>
    </Grid>
  )
}

export default Text
