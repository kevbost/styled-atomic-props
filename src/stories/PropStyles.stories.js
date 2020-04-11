import React from 'react'
import PropTypes from 'prop-types'
import {
  Div,
  Label,
  H1
  // A,
  // Img,
  // Li,
  // Ul,
  // P,
  // Span,
  // Strong,
} from '../styles'

export default {
  title: 'PropStyles'
}

const PassedComponent = ( props ) => {
  const { component: Component, children, propStyles, ...rest } = props

  return (
    <Component {...rest} propStyles={propStyles}>
      {children}
    </Component>
  )
}
PassedComponent.propTypes = {
  component: PropTypes.object,
  children: PropTypes.oneOfType( [ PropTypes.arrayOf( PropTypes.node ), PropTypes.node ] ),
  propStyles: PropTypes.string
}

class PropstylesForm extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      value: ''
    }
    this.handleChangeDiv = this.handleChangeDiv.bind( this )
    this.handleSubmit = this.handleSubmit.bind( this )
  }

  handleChangeDiv( event ) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit( event ) {
    event.preventDefault()
  }

  render() {
    const { component, label, ...rest } = this.props
    const { value } = this.state

    return (
      <Div my6 mx4>
        <Div pa4 border>
          <form onSubmit={this.handleSubmit}>
            <div>
              <Label bold>{label}</Label>
              <input type="text" value={value} onChange={this.handleChangeDiv} />
            </div>
          </form>
          <PassedComponent {...rest} component={component} propStyles={value}>
            {'inner text of div'}
          </PassedComponent>
        </Div>
      </Div>
    )
  }
}
PropstylesForm.propTypes = {
  component: PropTypes.object,
  label: PropTypes.string
}

export const PropstylesTester = () => {
  return (
    <Div padding bgDark>
      <Div
        bgWhite
        borderRadius
        padding
        pb2
        style={{
          boxShadow: '4px 5px 10px rgba(0, 0, 0, 0.25) '
        }}
      >
        <H1 ma0 center>
          {'propStyles Tester'}
        </H1>
        <PropstylesForm label={'Div'} component={Div} />
      </Div>
    </Div>
  )
}
