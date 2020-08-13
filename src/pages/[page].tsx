import { CaseStudy } from 'components'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getCaseStudies, CaseStudyRequest } from 'lib/api'
import { CaseStudyType } from 'types'
import Error from 'next/error'

type PageProps = { caseStudyData: CaseStudyType }

const Page: React.FC<{ caseStudyData: CaseStudyType }> = ({
  caseStudyData,
}) => {
  if (!caseStudyData) {
    return <Error statusCode={404} />
  }

  return (
    <>
      {caseStudyData.slug.current}
      <CaseStudy />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  preview: isPreview = false,
  params,
}) => {
  const caseStudyData = await new CaseStudyRequest({
    handle: params?.page?.toString() || '',
    isPreview,
  }).fetch()

  const props: PageProps = { caseStudyData }

  return { props }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const caseStudies = await getCaseStudies()

  return {
    paths: caseStudies.map(cs => ({
      params: { page: cs.slug.current },
    })),

    fallback: true,
  }
}

export default Page
