import { injectGlobal } from 'styled-components'
import normalizeStyle from './normalize'
import generalStyle from './general'

/* eslint-disable no-unused-expressions */
injectGlobal`
  ${normalizeStyle}
  ${generalStyle}
`
