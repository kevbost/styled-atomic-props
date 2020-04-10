import React from 'react'
import { A, Div, Img, Li, Ul, P, Span, Strong } from '../styles/elements'

export default {
  title: 'Elements'
}

export const AComponent = () => {
  return (
    <A border href="#">
      {'A'}
    </A>
  )
}

export const DivComponent = () => {
  return <Div border>{'Div'}</Div>
}

export const ImgComponent = () => {
  return <Img border SameSite="Secure" src="https://placeimg.com/240/240/any" />
}

export const UlLiComponents = () => {
  return (
    <Ul border>
      <Li border>{'<Ul border><Li></Li></Ul>'}</Li>
      <Li border>{'<Ul border><Li></Li></Ul>'}</Li>
      <Li border>{'<Ul border><Li></Li></Ul>'}</Li>
      <Li border>{'<Ul border><Li></Li></Ul>'}</Li>
    </Ul>
  )
}

export const PComponent = () => {
  return (
    <>
      <P border>{'P'}</P>
      <P border>{'P'}</P>
    </>
  )
}

export const SpanComponent = () => {
  return (
    <>
      <Span border>{'Span'}</Span>
      <Span border>{'Span'}</Span>
    </>
  )
}

export const StrongComponent = () => {
  return (
    <>
      <Strong border>{'Strong'}</Strong>
      <Strong border>{'Strong'}</Strong>
    </>
  )
}
