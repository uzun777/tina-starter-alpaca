import Link from "next/link"
import styled from "styled-components"

export const BlogCard = ({ post }) => {
  return (
    <Container>
      {/*<StyledAnchor>*/}
      <BlogCardStyled>
        <StyledLink href={`blog/${post.fileName}`}>
          <Title>{post.data.frontmatter.title}</Title>
        </StyledLink>
        <h2>{`${post.data.frontmatter.author}`}</h2>
        <Description
          dangerouslySetInnerHTML={{
            __html: post.data.markdownBody.slice(0, 333) + " [...]",
          }}
        />
      </BlogCardStyled>
      {/*</StyledAnchor>*/}
    </Container>
  )
}

const Container = styled.div`
  width: 30%;
  padding-top: 20px;
  margin: 20px auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const BlogCardStyled = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};
`
const Title = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  cursor: pointer;

  &:hover {
    color: #2e6da4;
    text-decoration: none;
    outline: none;
  }
`

const Description = styled.p`
  color: #000;
  font-size: 14px;
  line-height: 18px;
  font-weight: normal;

  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const StyledLink = styled(Link)`
  cursor: pointer;
`
