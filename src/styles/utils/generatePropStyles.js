/**
 * Convert snake_case to camelCase with extra logic
 *
 * @param {string} snake_case_string snake_cased string, bg_string_to_convert (for example)
 *
 * @returns {string} bgstringtoconvert (for example)
 */
const removeUnderscores = ( snake_case_string ) => {
  return snake_case_string.replace( /(_)/g, '' )
}

/**
 * Convert snake_case to camelCase with extra logic
 *
 * @param {string} snake_case_string snake_cased string, bg_string_to_convert (for example)
 * @param {string} propStylePrefix Not functionally important, used to differentiate between empty-string as prefix and non-empty-strings
 *
 * @returns {string} camelCased string unless prefix === '' (which is an unfortunate backwards compatibility solution)
 */
const snakeToCamel = ( snake_case_string, propStylePrefix ) => {
  if ( propStylePrefix.length ) {
    return snake_case_string.replace( /(_bg)/, '_' ).replace( /(_\w)/g, ( m ) => {
      return m[1].toUpperCase()
    })
  } else {
    return removeUnderscores( snake_case_string )
  }
}

/**
 * Generate propStyles based on variable object group
 *
 * @param {string} cssProperty background-color (for example)
 * @param {string} propStylePrefix bc (for example)
 * @param {obj} variableGroup variable object
 *
 * @example
 * generatePropStyles( 'background-color', 'bg', colorVars )
 * generatePropStyles( 'border-color', 'bc', colorVars )
 * generatePropStyles( 'color', '', colorVars )
 */
export const generatePropStyles = ( cssProperty, propStylePrefix, variableGroup ) => {
  const obj = {}

  Object.keys( variableGroup ).map( ( x ) => {
    let newVar
    if ( x.indexOf( '$ueg_' ) > -1 ) {
      const uegStripped = x.replace( '$ueg_', '' )
      newVar = snakeToCamel( `${propStylePrefix}_${uegStripped}`, propStylePrefix )
    } else if ( x.indexOf( '$gray_' ) > -1 && propStylePrefix.length === 0 ) {
      const grayStripped = x.replace( '$', '' )
      newVar = snakeToCamel( `${grayStripped}`, 'gray' )
    } else {
      const restStripped = x.replace( '$', '' )
      newVar = snakeToCamel( `${propStylePrefix}_${restStripped}`, propStylePrefix )
    }

    return ( obj[`${newVar}`] = `${cssProperty}: ${variableGroup[x]};` )
  })

  return obj
}

export default generatePropStyles
