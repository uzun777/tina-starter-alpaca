import styled from "styled-components"

export const FooterWrapper = styled.footer`
  max-width: calc(762px + 40px);
  margin: 0 auto;
  padding: 20px;
  div {
    padding-top: 32px;
    border-top: 1px solid #d8d8d8;
  }
  @media all and (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 48px 20px;
    div {
      padding-top: 0;
      border-top: 0;
      display: flex;
    }
  }
`

export const FooterLink = styled.a`
  font-size: 12px;
  text-decoration: none;
  display: block;
  text-align: center;
  margin-bottom: 24px;
  color: #333300;
  @media all and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 40px;
  }
  &:hover {
    text-decoration: underline;
  }
`

export const EditWithTinaButton = styled.a`
  box-sizing: border-box;
  border: 1px solid #cce3fe;
  background-color: #eff6fe;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  color: #333333;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 14px;
  padding-top: 6px;
  max-width: 264px;
  margin: 0 auto;
  i {
    margin-right: 7px;
    font-size: 18px;
    position: relative;
    top: -2px;
    color: #0071f0;
  }
  &:hover {
    border-color: #77b1fa;
  }
  @media all and (min-width: 768px) {
    margin-right: 0;
  }
`
