import styled from "styled-components"
import Head from "@components/head"
import Layout from "@components/layout"
import { getBlogPosts } from "@utils"
import { useGlobalStyleForm } from "@hooks"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps"
import useCreateBlogPage from "../../hooks/useCreateBlogPage"
import { BlogCard } from "../../components/blogCard/BlogCard"

const Blog = (props) => {
  useCreateBlogPage(props.posts)
  const [styleData] = useGlobalStyleForm(props.styleFile, props.preview)
  return (
    <Layout searchText="Search blog posts" showDocsSearcher searchIndex="tina-starter-alpaca-Blogs" theme={styleData}>
      <Head title="Blog" />
      <Container>
        <Title>Blog</Title>
        <PostsBlock>
          {props.posts.slice(0, 40).map((post) => {
            return <BlogCard key={post.fileName} post={post} />
          })}
        </PostsBlock>
      </Container>
    </Layout>
  )
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps = async function ({ preview, previewData }) {
  try {
    const posts = await getBlogPosts(preview, previewData, "content/blog")
    const global = await getGlobalStaticProps(preview, previewData)

    if (preview) {
      return {
        props: {
          ...global,
          preview,
          posts,
        },
      }
    }
    return {
      props: {
        ...global,
        posts,
        preview: false,
        error: null,
      },
    }
  } catch (e) {
    return {
      props: {
        ...global,
      },
    }
  }
}

export default Blog

const Container = styled.div`
  background-color: #ffffff;
`

const PostsBlock = styled.div`
  display: grid;
  grid-template-columns: 518px 518px;
  grid-gap: 60px 109px;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: minmax(200px, 518px);
    grid-row-gap: 40px;
    margin: 0 5%;
  }
`

const Title = styled.h1`
  font-family: Roboto;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  padding-bottom: 41px;
  padding-top: 30px;
  margin: 0;
  color: #707070 !important;

  @media screen and (max-width: 1200px) {
    padding-bottom: 20px;
    padding-top: 15px;
  }
`
