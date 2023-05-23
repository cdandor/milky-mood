import styled from 'styled-components'
import { ReactComponent as ArrowSVG } from './picker-arrow.svg'
export const ColorInput = styled.input`
  width: 20px;
  height: 24px;
  border-radius: 100%;
  border: 1px solid #000;

  ::-webkit-color-swatch {
    border: 1px solid #000;
    border-radius: 100%;
  }
`
export const Panel = styled.div`
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  z-index: 2;
  position: fixed;
  box-shadow: rgb(0, 0, 0) 0 10px 100px;
  @media (max-width: 700px) {
    bottom: 0;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
`

export const Arrow = styled(ArrowSVG)`
  cursor: pointer;
  padding: 2px;
`
