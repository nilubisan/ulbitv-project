import { lazy } from 'react'

export const AboutLazy = lazy(async () => await import('./About'))
