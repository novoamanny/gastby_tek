/** @jsx jsx */
import { graphql } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'
import BackImg from 'gatsby-background-image'
import Img from 'gatsby-image'
import HomeScroller from '../components/homescroller'
import GalleryPreview from '../components/gallerypreview'
import Layout from '../components/layout'
import Section from '../components/section'
import HomeQuotes from '../components/homequotes'
import ButtonV2 from '../components/button-v2'
import Trafficatalyst from '../components/trafficatalyst'

const homepage = ({ data, location }) => {
  const sections = data.allSection.edges
  const { state = {} } = location
  // let sectionOne = sections.filter(obj => {
  //   return obj.node.section === 1
  // })
  let sectionTwo = sections.filter((obj) => {
    return obj.node.section === 2
  })
  let sectionThree = sections.filter((obj) => {
    return obj.node.section === 3
  })
  let sectionFour = sections.filter((obj) => {
    return obj.node.section === 4
  })
  let sectionFive = sections.filter((obj) => {
    return obj.node.section === 5
  })
  let sectionSix = sections.filter((obj) => {
    return obj.node.section === 6
  })
  // let sectionSeven = sections.filter(obj => {
  //   return obj.node.section === 7
  // })

  return (
    <Layout>
      <Helmet>
        <title>
          TEK® Industries | The Best and Most Durable Metal Roof in the Industry
        </title>
        <meta
          name="description"
          content="Our industry leading metal roofs provide homeowners with lifelong durability during severe weather, beauty and exceptional performance."
        />
        <meta
          name="keywords"
          content="metal roof, durable roof, durable metal roof, roof for severe weather, metal roof for bad weather, best roof, beautiful roof, efficient roof, tek roofing, tek roof, tek industries"
        />
      </Helmet>
      <HomeScroller />
      {sectionTwo.length > 0 ? (
        <Section key={sectionTwo[0].node.id}>
          <div sx={{ textAlign: `center`, marginTop: `0`, marginBottom: `7%` }}>
            <Styled.h1
              sx={{
                margin: `auto`,
                textAlign: `center`,
                paddingBottom: 0,
                fontSize: `8`,
              }}
            >
              {sectionTwo[0].node.text}
            </Styled.h1>
            <Styled.h3 sx={{ margin: 0, padding: 0 }}>
              {sectionTwo[0].node.text2}
            </Styled.h3>
            <Styled.h3 sx={{ margin: 0, padding: 0 }}>
              {sectionTwo[0].node.text3}
            </Styled.h3>
          </div>
          <div
            sx={{
              display: `flex`,
              marginBottom: `7%`,
              flexDirection: ['column', 'column', 'column', 'row', 'row'],
            }}
          >
            <div sx={{ width: ['100%', '100%', '100%', '45%', '45%'] }}>
              <Styled.h2
                sx={{
                  position: `relative`,
                  fontSize: `6`,
                  width: ['100%', '100%', '100%', '65%', '65%'],
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
                {sectionTwo[0].node.text4}
              </Styled.h2>
            </div>
            <div
              sx={{
                width: ['100%', '100%', '100%', '55%', '55%'],
                alignSelf: `center`,
              }}
            >
              <Img
                sx={{
                  width: `200px`,
                  backgroundSize: `contain`,
                  display: `inline-block`,
                  marginRight: `10%`,
                }}
                fluid={sectionTwo[0].node.image.childImageSharp.fluid}
              />
              <Img
                sx={{
                  width: `239px`,
                  backgroundSize: `contain`,
                  display: `inline-block`,
                }}
                fluid={sectionTwo[0].node.image2.childImageSharp.fluid}
              />
              <p sx={{ color: `grey` }}>{sectionTwo[0].node.text5}</p>
              <ButtonV2
                destination="/products"
                buttonText={sectionTwo[0].node.buttonText}
                borderColor="primary"
                color="primary"
                passed="0"
              />
            </div>
          </div>
        </Section>
      ) : null}
      {sectionThree.length > 0 ? (
        <BackImg
          fluid={sectionThree[0].node.image2.childImageSharp.fluid}
          sx={{ height: `188px`, margin: `5% 0` }}
        >
          <div
            sx={{
              display: `flex`,
              justifyContent: `space-evenly`,
              alignItems: `center`,
              height: `100%`,
            }}
          >
            <div
              sx={{ height: `8px`, width: `8%`, backgroundColor: 'primary' }}
            ></div>
            <Styled.h2
              sx={{
                color: 'background',
                padding: `0`,
                fontSize: ['2', '3', '4', '6', '6'],
                ':after': {
                  display: `none`,
                },
              }}
            >
              {sectionThree[0].node.text}
            </Styled.h2>
            <div
              sx={{ height: `8px`, width: `8%`, backgroundColor: 'primary' }}
            ></div>
            <Styled.h2
              sx={{
                color: 'background',
                padding: `0`,
                fontSize: ['2', '3', '4', '6', '6'],
                ':after': {
                  display: `none`,
                },
              }}
            >
              {sectionThree[0].node.text2}
            </Styled.h2>
            <div
              sx={{ height: `8px`, width: `8%`, backgroundColor: 'primary' }}
            ></div>
            <Styled.h2
              sx={{
                color: 'background',
                padding: `0`,
                fontSize: ['2', '3', '4', '6', '6'],
                ':after': {
                  display: `none`,
                },
              }}
            >
              {sectionThree[0].node.text3}
            </Styled.h2>
            <div
              sx={{ height: `8px`, width: `8%`, backgroundColor: 'primary' }}
            ></div>
            <Img
              sx={{
                width: `153px`,
                display: `inline-block`,
                position: `relative`,
                ':before': {
                  display: `inline-block`,
                  content: `""`,
                  height: `8px`,
                  backgroundColor: 'primary',
                  width: `95%`,
                  position: `absolute`,
                  left: `-100%`,
                  top: `32%`,
                },
                ':after': {
                  display: `inline-block`,
                  content: `""`,
                  height: `8px`,
                  backgroundColor: 'primary',
                  width: `95%`,
                  position: `absolute`,
                  right: `-200%`,
                  top: `32%`,
                },
              }}
              fluid={sectionThree[0].node.image.childImageSharp.fluid}
            />
            <div
              sx={{ height: `8px`, width: `8%`, backgroundColor: 'primary' }}
            ></div>
          </div>
        </BackImg>
      ) : null}
      {sectionFour.length > 0 ? (
        <Section key={sectionFour[0].node.id}>
          <div
            sx={{
              display: `flex`,
              marginBottom: `7%`,
              flexDirection: ['column', 'column', 'column', 'row', 'row'],
            }}
          >
            <div sx={{ width: ['100%', '100%', '100%', '45%', '45%'] }}>
              <Styled.h2
                sx={{
                  position: `relative`,
                  fontSize: `6`,
                  width: ['100%', '100%', '100%', '65%', '65%'],
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
                {sectionFour[0].node.text}
              </Styled.h2>
            </div>
            <div
              sx={{
                width: ['100%', '100%', '100%', '55%', '55%'],
                paddingBottom: ['10%', '10%', '10%', '0', '0'],
                alignSelf: `center`,
              }}
            >
              <Img
                sx={{
                  width: `200px`,
                  backgroundSize: `contain`,
                  display: `inline-block`,
                  marginRight: `10%`,
                }}
                fluid={sectionFour[0].node.image.childImageSharp.fluid}
              />
              <Img
                sx={{
                  width: `239px`,
                  backgroundSize: `contain`,
                  display: `inline-block`,
                }}
                fluid={sectionFour[0].node.image2.childImageSharp.fluid}
              />
              <p sx={{ color: `grey` }}>{sectionFour[0].node.text5}</p>
              <ButtonV2
                destination="/products"
                buttonText={sectionFour[0].node.buttonText}
                borderColor="primary"
                color="primary"
                passed="1"
              />
            </div>
          </div>
        </Section>
      ) : null}
      {sectionFive.length > 0 ? (
        <div sx={{ backgroundColor: 'text' }}>
          <Section key={sectionFive[0].node.id}>
            <div
              sx={{
                display: `flex`,
                padding: `10% 0`,
                flexDirection: ['column', 'column', 'column', 'row', 'row'],
              }}
            >
              <div
                sx={{
                  width: ['100%', '100%', '100%', '45%', '45%'],
                  paddingBottom: ['10%', '10%', '10%', '0', '0'],
                }}
              >
                <Styled.h2>{sectionFive[0].node.text}</Styled.h2>
                <ButtonV2
                  buttonText={sectionFive[0].node.buttonText}
                  destination="/gallery"
                  borderColor="primary"
                  color="primary"
                  passed="0"
                />
              </div>
              <div
                sx={{
                  width: ['100%', '100%', '100%', '55%', '55%'],
                  paddingBottom: ['20%', '20%', '20%', '0', '0'],
                }}
              >
                <GalleryPreview />
              </div>
            </div>
          </Section>
        </div>
      ) : null}
      <BackImg
        fluid={data.quoteImage.childImageSharp.fluid}
        sx={{
          backgroundSize: `cover`,
          position: `relative`,
          overflow: `hidden`,
        }}
      >
        <div
          sx={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            alignContent: `center`,
            textAlign: `center`,
            padding: ['5% 0', '5% 0', '5% 0', '5% 0', '5% 0'],
            ':before': {
              content: '""',
              display: ['block', 'block', 'block', 'block', 'block'],
              position: `absolute`,
              zIndex: `-1`,
              top: `0`,
              left: `0`,
              right: `0`,
              width: `100%`,
              height: `100%`,
              background: `rgba(0,0,0,0.8)`,
            },
          }}
        >
          <Section>
            <Styled.h2
              sx={{ color: `text`, marginTop: `0`, ':after': { right: `0` } }}
            >
              Testimonials
            </Styled.h2>
            <HomeQuotes />
          </Section>
        </div>
      </BackImg>
      <div sx={{ backgroundColor: 'secondary', color: `text` }}>
        <a
          id="tcmap"
          sx={{
            display: 'block',
            position: 'relative',
            top: '-100px',
            visibility: 'hidden',
          }}
        ></a>
        <Section>
          <Trafficatalyst
            fromPage={location.state && location.state.fromPage == 1 ? 1 : 0}
          />
        </Section>
      </div>
      <div sx={{ backgroundColor: 'primary' }}>
        {sectionSix.length > 0 ? (
          <Section key={sectionSix[0].node.id}>
            <div
              sx={{
                display: `flex`,
                padding: [
                  '10% 0 20% 0',
                  '10% 0 20% 0',
                  '10% 0 20% 0',
                  '5% 0',
                  '5% 0',
                ],
                flexDirection: ['column', 'column', 'column', 'row', 'row'],
              }}
            >
              <div sx={{ width: ['100%', '100%', '100%', '45%', '45%'] }}>
                <Styled.h2
                  sx={{ color: `text`, after: { backgroundColor: 'text' } }}
                >
                  {sectionSix[0].node.text}
                </Styled.h2>
                <Img
                  sx={{ width: `411px`, maxWidth: `80%` }}
                  fluid={sectionSix[0].node.image.childImageSharp.fluid}
                />
              </div>
              <div
                sx={{
                  width: ['100%', '100%', '100%', '55%', '55%'],
                  alignSelf: `center`,
                }}
              >
                <Img
                  sx={{ width: `385px`, maxWidth: `80%` }}
                  fluid={sectionSix[0].node.image2.childImageSharp.fluid}
                />
                <Styled.p sx={{ color: `text` }}>
                  {sectionSix[0].node.text3}
                </Styled.p>
                <ButtonV2
                  buttonText={sectionSix[0].node.buttonText}
                  destination="/dealers"
                  borderColor="text"
                  color="text"
                  hoverBg="text"
                  hoverText="primary"
                  passed="0"
                />
              </div>
            </div>
          </Section>
        ) : null}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query HomePageQuery {
    allSection(filter: { page: { eq: "home" } }) {
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
    quoteImage: file(relativePath: { regex: "images/testimonial-image*/" }) {
      childImageSharp {
        fluid(maxHeight: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default homepage
