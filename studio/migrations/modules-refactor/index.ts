import {at, defineMigration, set} from 'sanity/migrate'
import {MediaBlock} from '../../../web/src/sanity/types'

export default defineMigration({
  title:
    'Converts old module objects to newer more flexible modules which allow for Mux video and more straightforward styling',
  documentTypes: ['caseStudy'],
  migrate: {
    document(doc: any, context) {
      const modulesV2 = (doc.modules || []).map((module: any, i: number) => {
        if (module._type === 'textBlock') {
          return {
            ...module,
            content: undefined,
            richText: module.content,
          }
        }

        if (module._type === 'website') {
          if (module.media[0]._type === 'image') {
            return {...module, media: {image: module.media[0]}}
          }
          return {...module, media: {image: null}}
        }

        if (module._type === 'dynamicImage') {
          const nextIndex = i + 1

          const isHalf = module.span === 'half'

          if (isHalf) {
            const nextModule = doc.modules[nextIndex]

            return {
              _type: 'diptych',
              items: [
                {
                  _type: 'diptych.media',
                  media: {
                    image: module.image,
                  },
                },
              ],
            }

            // const isNextAlsoHalfImage =
            //   nextModule._type === 'dynamicImage' && nextModule.span === 'half'

            // console.log({isHalf, isNextAlsoHalfImage})

            // console.log({title: doc.title, module, isHalf})
          }

          const mediaBlock: MediaBlock = {
            _type: 'mediaBlock',
            media: {
              image: module.image,
            } as any,
          }

          return mediaBlock
        }

        return module
      })

      return [at('modulesV2', set(modulesV2))]
    },
    node(node, path, context) {
      // this will be called for every node in every document of the matching type
    },
    object(node, path, context) {
      // this will be called for every object node in every document of the matching type
    },
    array(node, path, context) {
      // this will be called for every array node in every document of the matching type
    },
    string(node, path, context) {
      // this will be called for every string node in every document of the matching type
    },
    number(node, path, context) {
      // this will be called for every number node in every document of the matching type
    },
    boolean(node, path, context) {
      // this will be called for every boolean node in every document of the matching type
    },
    null(node, path, context) {
      // this will be called for every null node in every document of the matching type
    },
  },
})
