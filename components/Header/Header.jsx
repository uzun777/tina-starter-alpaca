import LingoCardLogo from "../../public/lingocard.svg"
import styled from "styled-components"

export const TopBar = () => {
  return (
    <TopBarStyled>
      <TopBarContainer>
        <TopBarLink href={"/blog"}>
          <LingoCardLogo width={144} height={31} />
        </TopBarLink>
        <TopBarLink href={"https://dev.lingocard.com/"}>Log in</TopBarLink>
      </TopBarContainer>
    </TopBarStyled>
  )
}

const TopBarStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;
`

const TopBarContainer = styled.div`
  max-width: 1400px;
  margin: auto;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`
const TopBarLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
`
