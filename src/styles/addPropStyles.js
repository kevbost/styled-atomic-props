import propStyles from './propStyles'

/**
 * @description Exported object to use in getPropStyles.js
 */
export let userPropStyles = {}

/**
 *
 * @param {Object} userConfig
 * @param {Boolean} withDefaults
 * @return {Void}
 * @description Take in user propStyles configuration, combine with defaults if desired
 *
 * @example
 * addPropStyles({
 *   foo: 'color: red;'
 * })
 */
export const addPropStyles = ( userConfig, withDefaults ) => {
  if ( withDefaults ) {
    return ( userPropStyles = {
      ...propStyles,
      ...userConfig
    })
  } else {
    return ( userPropStyles = userConfig )
  }
}

export default addPropStyles
