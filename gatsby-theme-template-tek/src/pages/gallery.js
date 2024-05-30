/** @jsx jsx */
import { graphql } from 'gatsby'
import BackImg from 'gatsby-background-image'
import { jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Gallery from '../components/galleryfull'

const gallery = ({ data }) => {
  const sections = data.allSection.edges

  let sectionOne = sections.filter((obj) => {
    return obj.node.section === 1
  })
  // let sectionTwo = sections.filter(obj => {
  //   return obj.node.section === 2
  // })
  // let sectionThree = sections.filter(obj => {
  //   return obj.node.section === 3
  // })
  // let sectionFour = sections.filter(obj => {
  //   return obj.node.section === 4
  // })

  return (
    <Layout>
      <Helmet>
        <title>TEK® Industries | View Our Beautiful, Durable Roofs</title>
        <meta
          name="description"
          content="TEK Industries roofs aren't just the most durable, they also offer lifelong exceptional performance wile looking beautiful. View our past work to see for yourself."
        />
        <meta
          name="keywords"
          content="metal roof, durable roof, durable metal roof, roof for severe weather, metal roof for bad weather, best roof, beautiful roof, efficient roof, tek roofing, tek roof, tek industries"
        />
      </Helmet>
      <BackImg
        critical
        fluid={sectionOne[0].node.image.childImageSharp.fluid}
        sx={{
          backgroundSize: `contain`,
          backgroundPosition: `top`,
          backgroundColor: `#fff`,
          overflow: `hidden`,
        }}
      >
        <div
          sx={{
            position: `relative`,
            ':before': {
              content: '""',
              display: ['none', 'none', 'block', 'block', 'block'],
              position: `absolute`,
              zIndex: `-1`,
              top: `0`,
              left: `0`,
              right: `0`,
              width: `100%`,
              height: `100vh`,
              background: `rgba(0,0,0,0.45)`,
            },
          }}
        >
          <div
            sx={{
              ':before': {
                content: '""',
                display: ['none', 'none', 'block', 'block', 'block'],
                position: `absolute`,
                zIndex: `-1`,
                top: ['-550px', '-550px', '-470px', '-470px', '0'],
                bottom: `-750px`,
                left: `-250px`,
                width: `300vw`,
                height: `200vh`,
                background: `white`,
                transform: `skew(-65deg)`,
              },
            }}
          >
            <div
              key={sectionOne[0].node.id}
              sx={{
                margin: `0 auto`,
                width: ['auto', 'auto', 'auto', '85vw', '85vw'],
                padding: `10% 0`,
              }}
            >
              <Gallery
                toptext={sectionOne[0].node.text}
                // subtext={sectionOne[0].node.text2}
                header1={sectionOne[0].node.text3}
                header2={sectionOne[0].node.text4}
              />
            </div>
          </div>
        </div>
      </BackImg>
    </Layout>
  )
}

export const query = graphql`
  query GalleryPageQuery {
    allSection(filter: { page: { eq: "gallery" } }) {
      edges {
        node {
          text
          text2
          text3
          text4
          text5
          buttonText
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
  }
`

export default gallery
