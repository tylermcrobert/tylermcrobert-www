import {at, defineMigration, set} from 'sanity/migrate'
import {MediaBlock} from '../../../web/src/sanity/types'

export default defineMigration({
  title:
    'Converts old module objects to newer more flexible modules which allow for Mux video and more straightforward styling',
  documentTypes: ['caseStudy'],
  migrate: {
    document(doc: any, context) {
      const modulesV2 = []
      const modules = doc.modules || [] // Ensure the modules array exists

      let skipNext = false // Flag to skip modules already processed

      for (let i = 0; i < modules.length; i++) {
        if (skipNext) {
          skipNext = false
          continue // Skip this module as it was already processed
        }

        const module = modules[i]
        const nextModule = modules[i + 1] || null
        const prevModule = modules[i - 1] || null

        if (module._type === 'dynamicImage' && module.span === 'half') {
          // Handle a pair of consecutive half images
          if (nextModule?._type === 'dynamicImage' && nextModule.span === 'half') {
            modulesV2.push({
              _type: 'diptych',
              items: [
                {
                  _type: 'diptych.media',
                  aspect: 1 / module.aspect,
                  media: {
                    image: module.image,
                  },
                },
                {
                  _type: 'diptych.media',
                  aspect: 1 / module.aspect,
                  media: {
                    image: nextModule.image,
                  },
                },
              ],
            })
            skipNext = true // Skip the next module as it's already processed
            continue
          }

          // Handle pairing a half image with a textBlock
          if (nextModule?._type === 'textBlock') {
            modulesV2.push({
              _type: 'diptych',
              items: [
                {
                  _type: 'diptych.media',
                  aspect: 1 / module.aspect,
                  media: {
                    image: module.image,
                  },
                },
                {
                  _type: 'diptych.text',
                  richText: nextModule.content,
                },
              ],
            })
            skipNext = true // Skip the next module as it's already processed
            continue
          }

          if (prevModule?._type === 'textBlock') {
            modulesV2.push({
              _type: 'diptych',
              items: [
                {
                  _type: 'diptych.text',
                  richText: prevModule.content,
                },
                {
                  _type: 'diptych.media',
                  aspect: 1 / module.aspect,
                  media: {
                    image: module.image,
                  },
                },
              ],
            })
            continue
          }

          // Handle standalone half image
          modulesV2.push({
            _type: 'diptych',
            items: [
              {
                _type: 'diptych.media',
                aspect: 1 / module.aspect,
                media: {
                  image: module.image,
                },
              },
            ],
          })
          continue
        }

        if (module._type === 'textBlock') {
          // Skip textBlock if it would be paired with a half dynamicImage
          const nextIsHalfImage = nextModule?._type === 'dynamicImage' && nextModule.span === 'half'
          const prevIsHalfImage = prevModule?._type === 'dynamicImage' && prevModule.span === 'half'

          if (nextIsHalfImage || prevIsHalfImage) {
            continue
          }

          // Handle unpaired textBlock
          modulesV2.push({
            ...module,
            content: undefined, // Remove deprecated field
            richText: module.content,
          })
          continue
        }

        if (module._type === 'website') {
          // Handle website with media
          if (module.media[0]._type === 'image') {
            modulesV2.push({...module, media: {image: module.media[0]}})
          } else {
            modulesV2.push({...module, media: {videoFile: module.media[0].videoFile}})
          }
          continue
        }

        if (module._type === 'dynamicImage') {
          // Handle other dynamicImage modules
          modulesV2.push({
            _type: 'mediaBlock',
            aspect: 1 / module.aspect,
            media: {
              image: module.image,
            },
          })
          continue
        }

        // Default case: add the module as-is
        modulesV2.push(module)
      }

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
