import React from 'react'
import { Image } from './styles'
const ImgBox = ({ x, y }) => {
  return <Image $initialX={x} $initialY={y} />
}

export default ImgBox
