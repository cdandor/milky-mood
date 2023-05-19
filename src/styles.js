import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
    background-color: #2828e6;
    color: #FBFBFB;
    height:100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden ;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-family: 'Work Sans', Arial, Helvetica, sans-serif;
    font-weight: 500;
}`

export const Marginals = css`
  box-sizing: border-box;
  display: flex;
  pointer-events: none;
  position: fixed;
  width: 100vw;
  z-index: 1;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 400px;
  height: 600px;
`
export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
