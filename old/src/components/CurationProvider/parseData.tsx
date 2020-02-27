import { ICtxProviderData } from "./types"
import { CtxItem } from "./CurationProvider"
import { DEFAULT_CTX } from "../../constants"

const { RichText } = require("prismic-reactjs")

const parseData = (data: ICtxProviderData, chosenCtx: string) => {
  const contexts: CtxItem[] = data.prismic.allContexts.edges
    .map(context => context.node)
    .map(context => ({
      uid: context._meta.uid,
      name: RichText.asText(context.context_name),
      caseStudies: context.case_study_list
        .map(cs => cs.case_study_item)
        .filter(cs => cs)
        .map(cs => ({
          uid: cs._meta.uid,
          title: cs.title[0].text,
        })),
    }))

  // returns only valid ctx
  const currentCtx = (() => {
    const isValid = contexts.map(c => c.uid).indexOf(chosenCtx) !== -1
    const ctxId = isValid ? chosenCtx : DEFAULT_CTX
    return contexts.filter(context => context.uid === ctxId)[0]
  })()

  return { contexts, currentCtx }
}

export default parseData
