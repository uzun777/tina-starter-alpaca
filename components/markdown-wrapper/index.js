import { shape } from "prop-types"

import CodeBlock from "./CodeBlock"
import Heading from "./Heading"

import { ReactMarkdowStyled } from "./styles"

const MarkdownWrapper = ({ source }) => (
  <ReactMarkdowStyled source={source} renderers={{ code: CodeBlock, heading: Heading }} skipHtml={false} allowDangerousHtml={true} />
)

MarkdownWrapper.propTypes = {
  post: shape(),
}

export default MarkdownWrapper
