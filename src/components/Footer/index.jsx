import React from 'react'
import { Footer, H2, H2Middle } from './styles'
const FooterComponent = ({ textColor }) => (
  <Footer $color={textColor}>
    <H2>June 12</H2>
    <H2Middle $color={textColor}>World Tour</H2Middle>
    <H2>Aug 19</H2>
  </Footer>
)

export default FooterComponent
