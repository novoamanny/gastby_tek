/** @jsx jsx */
import { graphql } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Section from '../components/section'
import ButtonV2 from '../components/button-v2'

const pageNotFound = ({ data }) => {
  const sections = data.allSection.edges

  let sectionOne = sections.filter((obj) => {
    return obj.node.section === 1
  })

  return (
    <Layout>
      <Section>
        <div
          sx={{
            display: `flex`,
            flexDirection: `column`,
            flex: `1 1 auto`,
            height: `100%`,
            padding: `10% 0`,
          }}
        >
          <Styled.h2
            sx={{
              position: `relative`,
              fontSize: `6`,
              marginBottom: `0`,
              ':after': {
                content: `""`,
                position: `absolute`,
                bottom: `0`,
                left: `0`,
                width: `20%`,
                height: `3px`,
                margin: `0 auto`,
                display: `block`,
                backgroundColor: 'primary',
              },
            }}
          >
            {sectionOne[0].node.text}
          </Styled.h2>
          <p sx={{ color: `grey`, padding: `1% 0` }}>
            {sectionOne[0].node.text2}
          </p>
          <ButtonV2
            destination="/"
            buttonText={sectionOne[0].node.buttonText}
            borderColor="primary"
            color="primary"
          />
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query PageNotFoundPageQuery {
    allSection(filter: { page: { eq: "pagenotfound" } }) {
      edges {
        node {
          text
          text2
          text3
          text4
          text5
          buttonText
          buttonText2
          image {
            childImageSharp {
              fluid(maxHeight: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          image2 {
            childImageSharp {
              fluid(maxHeight: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          section
        }
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/items/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default pageNotFound
