import Link from "next/link"
import styled from "styled-components"

export const BlogCard = ({ post }) => {
  return (
    <BlogCardStyled>
      <ImageView src={post.data.frontmatter.preview} />
      <StyledLink href={`blog/${post.fileName}`}>
        <Title>{post.data.frontmatter.title}</Title>
      </StyledLink>
      <Description
        dangerouslySetInnerHTML={{
          __html: post.data.markdownBody.slice(0, 333) + " [...]",
        }}
      />
      <Author>{`${post.data.frontmatter.author}`}</Author>
    </BlogCardStyled>
  )
}

const BlogCardStyled = styled.div`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};
`
const ImageView = styled.img`
  width: 100%;
  height: auto;
`
const Title = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  cursor: pointer;
  margin: 15px 0;

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
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const StyledLink = styled(Link)`
  cursor: pointer;
`

const Author = styled.span`
  font-size: 17px;
  color: #929292;
  padding: 10px 0;
`
