import LingoCardLogo from "../../public/lingocard.svg"
import styled from "styled-components"

export const TopBar = () => {
  return (
    <TopBarStyled>
      <TopBarContainer>
        <LingoCardLogo width={144} height={31} />
        <TopBarLink href={"https://dev.lingocard.com/"}>Log in</TopBarLink>
      </TopBarContainer>
    </TopBarStyled>
  )
}

const TopBarStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 50px;
  padding: 0 24px;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
`

const TopBarContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: calc(1048px + 40px);
`
const TopBarLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
`
