import React from "react"
// eslint-disable-next-line no-unused-vars
import { IText } from "templates/casestudy"
import { Grid, Paragraph } from "components"
import S from "./Styled"

const { RichText } = require("prismic-reactjs")

interface IProps {
  data: IText
}
const Text: React.FC<IProps> = ({ data }) => {
  return (
    <Grid>
      <S.ParagraphWrapper>
        <Paragraph>{RichText.render(data.primary.paragraph)}</Paragraph>
      </S.ParagraphWrapper>
    </Grid>
  )
}

export default Text
