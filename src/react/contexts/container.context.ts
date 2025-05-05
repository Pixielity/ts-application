import React, { createContext } from 'react'
import type { IContainer } from '@pixielity/ts-types'

// Create the context with undefined as default value
export const ContainerContext = createContext<IContainer | undefined>(undefined)
