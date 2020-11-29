import { useContext } from 'react'
import { AppCtx } from 'providers/AppProvider'

export const useApp = () => useContext(AppCtx)
