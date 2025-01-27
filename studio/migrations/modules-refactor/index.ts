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

      for (let i = 0; i < modules.length; i++) {
        const module = modules[i]
        const nextIndex = i + 1
        const prevIndex = i - 1
        const nextModule = modules[nextIndex]
        const prevModule = modules[prevIndex]

        if (module._type === 'dynamicImage' && module.span === 'half') {
          // Check if the previous or next module is a textBlock
          if (nextModule?._type === 'textBlock' || prevModule?._type === 'textBlock') {
            const textModule = nextModule?._type === 'textBlock' ? nextModule : prevModule

            modulesV2.push({
              _type: 'diptych',
              items: [
                {
                  _type: 'diptych.media',
                  media: {
                    image: module.image,
                  },
                },
                {
                  _type: 'diptych.text',
                  richText: textModule.content,
                },
              ],
            })

            // Skip the adjacent textBlock module if it was the next module
            if (nextModule?._type === 'textBlock') {
              i++ // Increment `i` to skip processing the next module
            }
            continue
          }

          // Handle dynamicImage with no adjacent textBlock
          modulesV2.push({
            _type: 'diptych',
            items: [
              {
                _type: 'diptych.media',
                media: {
                  image: module.image,
                },
              },
            ],
          })
          continue
        }

        // Handle textBlock normally if it's not part of a diptych
        if (module._type === 'textBlock') {
          modulesV2.push({
            ...module,
            content: undefined, // Remove deprecated field
            richText: module.content,
          })
          continue
        }

        // Handle website with media
        if (module._type === 'website') {
          if (module.media[0]._type === 'image') {
            modulesV2.push({...module, media: {image: module.media[0]}})
          } else {
            modulesV2.push({...module, media: {image: null}})
          }
          continue
        }

        // Handle other dynamicImage modules
        if (module._type === 'dynamicImage') {
          modulesV2.push({
            _type: 'mediaBlock',
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
