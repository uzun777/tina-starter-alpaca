import styled, { css } from "styled-components"

export const LayoutStyled = styled.main`
  margin: 0;
  font-family: Roboto, system-ui, sans-serif;
  width: 100%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
`

export const LayoutBodyStyled = styled.div`
  min-height: calc(100vh - 64px);
  max-width: 1400px;
  display: flex;
  background-color: #ffffff;
  flex-flow: column;
  margin: 0 auto;
  ${({ splitView }) =>
    splitView &&
    css`
      @media all and (min-width: 768px) {
        display: flex;
        padding-top: 24px;
      }
    `}
`
