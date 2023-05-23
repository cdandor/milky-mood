import React, { useState } from 'react'
import { ColorInput, Panel, InputContainer, Arrow } from './styles'
const [showPickerColor, togglePicker] = useState(false)
const ColorPicker = ({ bgColor, setBgColor }) => {
  return (
    <Panel>
      <Arrow onClick={showPickerColor} togglePicker={togglePicker} />
      <InputContainer>
        <p>Background:</p>
        <ColorInput type='color' value={bgColor} onChange={setBgColor} />
      </InputContainer>
    </Panel>
  )
}

export default ColorPicker
