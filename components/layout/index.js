import { node, bool } from "prop-types"
import { useGithubToolbarPlugins } from "react-tinacms-github"
import { ThemeProvider } from "styled-components"

import TopBar from "@components/topbar"
import Footer from "@components/footer"

import { LayoutStyled, LayoutBodyStyled } from "./styles"

const Layout = ({ children, showDocsSearcher, splitView, preview, theme }) => {
  useGithubToolbarPlugins()
  return (
    <ThemeProvider theme={theme || require("../../content/styles.json")}>
      <LayoutStyled>
        <TopBar
          showDocsSearcher={showDocsSearcher}
          theme={theme || require("../../content/styles.json")}
        />
        <LayoutBodyStyled splitView={splitView}>{children}</LayoutBodyStyled>
        <Footer preview={preview} />
      </LayoutStyled>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: node,
  showDocsSearcher: bool,
  splitView: bool,
}

Layout.defaultProps = {
  showDocsSearcher: false,
  splitView: false,
}

export default Layout
