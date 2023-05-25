import React from 'react'
import { Logo, Header } from './styles'
const HeaderComponent = ({ textColor }) => (
  <Header>
    <Logo title='Milky Mood logo' $color={textColor} />
  </Header>
)

export default HeaderComponent
