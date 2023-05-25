import React, { useState } from 'react'
import { ColorInput, Panel, InputContainer, Arrow } from './styles'

const ColorPicker = ({ bgColor, setBgColor, textColor, setTextColor }) => {
  const [showColorPicker, setColorPicker] = useState(false)
  const handleChange = (event) => {
    chroma(bgColor).luminance() < 0.5
      ? setTextColor('#fff')
      : setTextColor('#000')

    setBgColor(event.target.value)
  }
  return (
    <Panel $isOpen={showColorPicker} $color={bgColor}>
      <Arrow
        onClick={() => setColorPicker((showColorPicker) => !showColorPicker)}
        $isOpen={showColorPicker}
        $color={textColor}
      />
      <InputContainer $color={textColor}>
        <p>Background: </p>
        <ColorInput
          type='color'
          value={bgColor}
          onChange={(event) => setBgColor(event.target.value)}
        />
        <p>Text</p>
        <ColorInput
          type='color'
          value={textColor}
          onChange={(event) => setTextColor(event.target.value)}
        />
      </InputContainer>
    </Panel>
  )
}

export default ColorPicker
