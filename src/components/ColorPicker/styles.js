import styled from 'styled-components'
import { ReactComponent as ArrowSVG } from './picker-arrow.svg'

export const ColorInput = styled.input`
  border-radius: 100%;
  height: 20px;
  width: 24px;
  border: 1px solid #000;

  ::-webkit-color-swatch {
    border: 1px solid #000;
    border-radius: 100%;
  }
`

export const Panel = styled.div.attrs(({ $color }) => ({
  style: {
    backgroundColor: `${$color}`,
  },
}))`
  position: fixed;
  box-shadow: rgb(0, 0, 0) 0 0 20px;
  right: 0;
  top: 60px;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-250px')};
  padding: 4px 14px;
  color: #000;
  display: flex;
  transition: 0.3s;
  z-index: 1;
  margin: 24px 0;
  @media (max-width: 700px) {
    top: unset;
    bottom: 66px;
  }
`

export const InputContainer = styled.div.attrs(({ $color }) => ({
  style: {
    color: `${$color}`,
  },
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 10px;
`

export const Arrow = styled(ArrowSVG).attrs(({ $color }) => ({
  style: {
    fill: `${$color}`,
  },
}))`
  cursor: pointer;
  padding: 20px 6px;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'unset')};
`
