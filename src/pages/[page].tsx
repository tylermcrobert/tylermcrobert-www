import { CaseStudy, Layout } from 'components'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getCaseStudies, CaseStudyRequest } from 'lib/api'
import { CaseStudyType } from 'types'
import Error from 'next/error'
import { CaseStudyProvider } from 'providers'

type PageProps = {
  caseStudyData: CaseStudyType
  query: string
  isPreview: boolean
}

const Page: React.FC<PageProps> = ({
  caseStudyData,
  //  query, isPreview
}) => {
  if (!caseStudyData) {
    return <Error statusCode={404} />
  }

  return (
    <Layout title={caseStudyData?.title || null}>
      <CaseStudyProvider data={caseStudyData}>
        <CaseStudy />
      </CaseStudyProvider>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  preview: isPreview = false,
  params,
}) => {
  const caseStudyReq = new CaseStudyRequest({
    handle: params?.page?.toString() || '',
    isPreview,
  })

  const caseStudyData = (await caseStudyReq.fetch()) || null
  const query = caseStudyReq.query

  const props: PageProps = { caseStudyData, query, isPreview }

  return { props }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const caseStudies = await getCaseStudies()

  return {
    paths: caseStudies.map(cs => ({
      params: { page: cs.slug?.current },
    })),

    fallback: true,
  }
}

export default Page
