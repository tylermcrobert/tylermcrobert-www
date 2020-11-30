import { CaseStudy, Layout } from 'components'
import { GetStaticPaths, GetStaticProps } from 'next'
import { CaseStudyType } from 'types'
import Error from 'next/error'
import { CaseStudyProvider } from 'providers'
import { getClient, usePreviewSubscription } from 'lib/sanity'

const caseStudyQuery = `
      *[_type == "caseStudy" && slug.current == $slug][0]{
        ...,
        modules[] {
          ...,
          'theme': theme -> { background, dots, frame },
          media[]{
            ...,
            'video': videoFile.asset-> { url }
          },
          frames[]{
            ...,
            'video': videoFile.asset-> { url }
          }
        }
      }
    `

type PageProps = {
  caseStudyData: CaseStudyType
  isPreview: boolean
  slug: string
}

const Page: React.FC<PageProps> = ({
  caseStudyData: initialCmsData,
  isPreview,
  slug,
}) => {
  const { data: caseStudyData } = usePreviewSubscription(caseStudyQuery, {
    params: { slug },
    initialData: initialCmsData,
    enabled: isPreview,
  })

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
  preview = false,
  params,
}) => {
  const slug = params?.page?.toString() || ''
  const caseStudyData = await getClient(preview).fetch(caseStudyQuery, {
    slug,
  })

  const props: PageProps = { caseStudyData, isPreview: preview, slug }

  return { props }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const caseStudies = await getClient(true).fetch(`*[_type == 'caseStudy']`)
  return {
    paths: caseStudies.map((cs: any) => ({
      params: { page: cs.slug?.current },
    })),

    fallback: true,
  }
}

export default Page
