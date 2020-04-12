import { propStyles } from './propStyles'

/**
 * Function to concat matched prop styles.
 * Loop through component's props,
 *   pass props to propStyles function for each prop,
 *     then loops through returned css string and removes any whitespace
 *
 * There are special propStyles available that accept a string of propStyles seperated by spaces:
 *   hover="bgBlack white mx4 pa2"
 *
 * The regex is a simplified minifier.
 *   Removes all non-critical whitespace introduced by template literals.
 *     The standard format of returnCss is full of whitespaces and newlines.
 *     That does not matter to the renderer, but makes testing almost impossible.
 *
 * background-color: red; color: red;
 *    border: 10px solid red;
 *    some-style: red; some-other-style: red;
 * ( becomes => )
 *    background-color:red;color:red;border:10px solid red;some-style:red;some-other-style:red;
 *
 */
export const getPropStyles = ( props ) => {
  let returnCss = ''
  for ( const key in props ) {
    /* if key is in propstyles AND the prop has not been set to false */
    if ( propStyles[key] && props[key] ) {
      /* check for hover, focus, active or propStyles prop */
      if ( key.toString().match( /^(hover|focus|active|propStyles|ltSm|ltMd|ltLg|gtSm|gtMd|gtLg)$/ ) ) {
        // FLAG there's got to be a way to extract these from the propStyles="" propStyle
        if ( typeof props[key] !== 'string' ) {
          /* make sure only strings get passed to hover={} etc in components */
          throw new Error(
            `${key} must be set to space separated string, recieved key={${JSON.stringify(
              props[key]
            )}} of type ${typeof props[key]}`
          )
        } else {
          returnCss += propStyles[key](
            props[key]
              .toString()
              .replace( /\s+/g, ' ' )
              .split( ' ' )
              .map( ( propStyle ) => {
                return propStyles[propStyle]
              })
              .join( '' )
          )
        }
      } else if ( typeof props[key] !== 'boolean' ) {
        /* make sure only boolean get passed to propStyle={} in components */
        throw new Error( `${key} must be set to boolean, recieved "${props[key]}" of type ${typeof props[key]}` )
      } else {
        /* concatenate propStyles strings */
        returnCss += propStyles[key]
          .trim()
          .replace( /[\r\n]/g, '' )
          .replace( /;\s+/g, ';' )
          .replace( /:\s+/g, ':' )
      }
    }
  }

  return returnCss.replace( /(\S+)\s*?:(?:\s+)?(.*?);[\s\r\n]*/gm, '$1:$2;' )
}
export default getPropStyles
