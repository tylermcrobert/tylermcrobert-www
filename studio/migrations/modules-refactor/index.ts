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

        if (module._type === 'textBlock') {
          modulesV2.push({
            ...module,
            content: undefined,
            richText: module.content,
          })
          continue
        }

        if (module._type === 'website') {
          if (module.media[0]._type === 'image') {
            modulesV2.push({...module, media: {image: module.media[0]}})
          } else {
            modulesV2.push({...module, media: {image: null}})
          }
          continue
        }

        if (module._type === 'dynamicImage') {
          const nextIndex = i + 1

          if (module.span === 'half') {
            const nextModule = modules[nextIndex]

            console.log(nextModule)

            // Check the condition to remove the next module
            if (nextModule?._type === 'dynamicImage' && nextModule.span === 'half') {
              // Add the current module as a diptych
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
                    _type: 'diptych.media',
                    media: {
                      image: nextModule.image,
                    },
                  },
                ],
              })

              // Skip the next module
              i++ // Increment `i` to skip processing the next module
              continue
            }

            // If the next module doesn't match the condition, add only the current one
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

          // Handle non-half dynamicImage
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
