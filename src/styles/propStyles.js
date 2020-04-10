import { colorVars } from './variables'

export const colorPropStyles = {
  transparent: `color: ${colorVars.$transparent};`,
  white: `color: ${colorVars.$white};`,
  black: `color: ${colorVars.$black};`
}

export const borderPropStyles = {
  border: 'border: 1px solid red;'
}

export const displayPropStyles = {
  hide: 'display: none;',
  displayNone: 'display: none;',
  block: 'display: block;',
  inlineBlock: 'display: inline-block;',
  inline: 'display: inline;',

  hidei: 'display: none !important;',
  displayNonei: 'display: none !important;',
  blocki: 'display: block !important;',
  inlineBlocki: 'display: inline-block !important;',
  inlinei: 'display: inline !important;'
}

export const propStyles = {
  ...colorPropStyles,
  ...borderPropStyles,
  ...displayPropStyles
}

export default propStyles
