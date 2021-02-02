import Error from "next/error"
import { useRouter } from "next/router"
import { InlineForm, InlineText } from "react-tinacms-inline"
import matter from "gray-matter"
import { useGithubMarkdownForm } from "react-tinacms-github"
import { getGithubPreviewProps, parseMarkdown } from "next-tinacms-github"
import { InlineWysiwyg } from "react-tinacms-editor"
import styled from "styled-components"
import Head from "@components/head"
import Layout from "@components/layout"
import Toc from "@components/Toc"
import DocWrapper from "@components/doc-wrapper"
import { useCMS, usePlugin } from "tinacms"
import RichText from "@components/rich-text"
import { createToc, getBlogPosts } from "@utils"
import useCreateBlogPage from "../../hooks/useCreateBlogPage"

const BlogPage = (props) => {
  const cms = useCMS()
  const previewURL = props.previewURL || ""
  const router = useRouter()
  if (!props.file) {
    return <Error statusCode={404} />
  }

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  useCreateBlogPage(props.posts)
  const formOptions = {
    label: "Edit doc page",
    fields: [
      {
        name: "frontmatter.title",
        label: "Title",
        component: "text",
      },
    ],
  }

  const [data, form] = useGithubMarkdownForm(props.file, formOptions)
  usePlugin(form)
  return (
    <Layout searchText="Search blog posts" showDocsSearcher searchIndex="tina-starter-alpaca-Blogs">
      <Container>
        <Head title={`${data.frontmatter.title} | Blog`} />
        <InlineForm form={form}>
          <DocWrapper styled={false}>
            <RichText>
              <main>
                <Title>
                  <InlineText name="frontmatter.title" />
                </Title>
                {!props.preview && props.Alltocs.length > 0 && <Toc tocItems={props.Alltocs} />}
                <ImageView src={data.frontmatter.previewSrc} />

                <InlineWysiwyg
                  name="markdownBody"
                  format={"markdown"}
                  sticky="62px"
                  imageProps={{
                    uploadDir: () => "/images/",
                    parse: (media) => media.id,
                    previewSrc(src) {
                      return cms.media.previewSrc(src)
                    },
                  }}
                >
                  <Text
                    dangerouslySetInnerHTML={{
                      __html: data.markdownBody,
                    }}
                  />
                  {/*<MarkdownWrapper source={data.markdownBody} />*/}
                </InlineWysiwyg>
              </main>
            </RichText>
          </DocWrapper>
        </InlineForm>
      </Container>
    </Layout>
  )
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps = async function ({ preview, previewData, params }) {
  const { slug } = params
  const fileRelativePath = `content/blog/${slug}.md`
  let Alltocs = ""

  let posts = await getBlogPosts()
  if (preview) {
    const previewProps = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath,
      parse: parseMarkdown,
    })
    if (typeof window === "undefined") {
      Alltocs = createToc(previewProps.props.file.data.markdownBody)
    }
    return {
      props: {
        posts,
        Alltocs,
        previewURL: `https://raw.githubusercontent.com/${previewData.working_repo_full_name}/${previewData.head_branch}`,
        ...previewProps.props,
      },
    }
  }

  const content = await import(`../../content/blog/${slug}.md`)
  const data = matter(content.default)

  if (typeof window === "undefined") {
    Alltocs = createToc(data.content)
  }
  return {
    props: {
      posts,
      Alltocs,
      sourceProvider: null,
      error: null,
      preview: false,
      // the markdown file
      file: {
        fileRelativePath,
        data: {
          frontmatter: data.data,
          markdownBody: data.content,
        },
      },
    },
  }
}

export const getStaticPaths = async function () {
  const fg = require("fast-glob")
  const contentDir = "content/blog"
  const files = await fg(`${contentDir}**/*.md`)
  const paths = files
    .filter((file) => !file.endsWith("index.md"))
    .map((file) => {
      const path = file.substring(contentDir.length + 1, file.length - 3)
      return { params: { slug: path } }
    })
  return {
    fallback: true,
    paths,
  }
}

export default BlogPage

const Container = styled.div`
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
  background-color: #ffff;
  padding: 0 87px 50px;

  @media screen and (max-width: 768px) {
    padding: 0 40px;
  }
`

const Title = styled.h1`
  font-family: Roboto, serif;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  border-bottom: 1px solid #a4a4a4;
  padding-top: 35px;
  padding-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 20px;

    padding: 20px;
  }
`
const Text = styled.div`
  font-family: Roboto,serif;
  font-size: 14px
  line-height: 25px
`
const ImageView = styled.img`
  padding-bottom: 40px;

  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
  }
`
