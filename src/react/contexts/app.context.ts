import React, { createContext } from 'react'
import { type IApplication } from '@pixielity/ts-types'

// Create the context with undefined as default value
export const AppContext = createContext<IApplication | undefined>(undefined)
