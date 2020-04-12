import { marginPropStyles, paddingPropStyles } from './spacing.props'
import backgroundColor from './backgroundColor.props'
import border from './border.props'
import borderColor from './borderColor.props'
import boxShadow from './boxShadow.props'
import color from './color.props'
import display from './display.props'
import flex from './flex.props'
import fontSize from './fontSize.props'
import media from './media.props'
import opacity from './opacity.props'
import overflow from './overflow.props'
import psuedoSelectors from './psuedoSelectors.props'
import resize from './resize.props'
import table from './table.props'
import utility from './utility.props'
import width from './width.props'

export * from './backgroundColor.props'
export * from './border.props'
export * from './borderColor.props'
export * from './boxShadow.props'
export * from './color.props'
export * from './display.props'
export * from './flex.props'
export * from './fontSize.props'
export * from './media.props'
export * from './opacity.props'
export * from './overflow.props'
export * from './psuedoSelectors.props'
export * from './resize.props'
export * from './spacing.props'
export * from './table.props'
export * from './utility.props'
export * from './width.props'

export const propStyles = {
  ...backgroundColor,
  ...border,
  ...borderColor,
  ...boxShadow,
  ...color,
  ...display,
  ...flex,
  ...fontSize(),
  ...media,
  ...marginPropStyles,
  ...opacity(),
  ...overflow,
  ...paddingPropStyles,
  ...psuedoSelectors,
  ...resize,
  ...table,
  ...utility,
  ...width
}

export default propStyles
