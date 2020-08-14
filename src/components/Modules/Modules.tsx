import React from 'react'
import { useCaseStudy } from 'hooks'
import {
  ModuleSingleImage,
  ModuleDoubleImage,
  ModuleTripleImage,
  Grid,
} from 'components'

const Modules = () => {
  const { modules } = useCaseStudy()

  return (
    <Grid>
      {modules.map(module => {
        switch (module._type) {
          case 'singleImage':
            return <ModuleSingleImage key={module._key} data={module} />
          case 'doubleImage':
            return <ModuleDoubleImage key={module._key} data={module} />
          case 'tripleImage':
            return <ModuleTripleImage key={module._key} data={module} />
          default:
            return null
        }
      })}
    </Grid>
  )
}

export default Modules
