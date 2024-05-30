/** @jsx jsx */
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import BackImg from 'gatsby-background-image'
import { Styled, jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Section from '../components/section'
import ButtonV2 from '../components/button-v2'
import hipcap_1 from '../components/images/hip-cap-1.jpg'
import hipcap_2 from '../components/images/hip-flash-new-2.jpg'
import hipcap_3 from '../components/images/hip-flash-new-3.jpg'
import hipcap_4 from '../components/images/hip-flash-new-4.jpg'
import hipcap_5 from '../components/images/hip-flash-new-5.jpg'
import hipflash_1 from '../components/images/hip-flash-1.jpg'

const installs = ({ data }) => {
  const sections = data.allSection.edges

  let sectionOne = sections.filter((obj) => {
    return obj.node.section === 1
  })
  let sectionTwo = sections.filter((obj) => {
    return obj.node.section === 2
  })

  return (
    <Layout>
      <Helmet>
        <title>
          TEK® Industries | Metal Pro-X Hip Cap Installation | Metal Roof
          Installation
        </title>
        <meta
          name="description"
          content="Interested in installing the metal pro-x hip caps yourself? Follow the steps on our website to ensure your roof is as durable as possible!"
        />
        <meta
          name="keywords"
          content="metal rool, durable roof, durable metal roof, tek indsustries, tek roofing, tek installation, tek roof install, roof installation"
        />
      </Helmet>
      <BackImg
        critical
        fluid={sectionOne[0].node.image2.childImageSharp.fluid}
        sx={{
          overflow: `hidden`,
          backgroundSize: `contain`,
          backgroundPosition: `top`,
          backgroundColor: `primary`,
        }}
      >
        <div
          sx={{
            maxWidth: `1024px`,
            margin: `auto`,
            padding: [
              '15% 10% 20% 10%',
              '15% 10% 20% 10%',
              '15% 10% 20% 10%',
              '15% 10% 20% 10%',
              '10%',
            ],
            position: `relative`,
            zIndex: `15`,
            overflow: `hidden`,
          }}
        >
          <div
            sx={{
              width: `100%`,
            }}
          >
            <Styled.h1 sx={{ color: `text` }}>
              {sectionOne[0].node.text}
            </Styled.h1>
            <Styled.h2
              sx={{
                color: `text`,
                fontSize: `4`,
                ':after': {
                  backgroundColor: 'text',
                },
              }}
            >
              {sectionOne[0].node.text2}
            </Styled.h2>

            <div
              sx={{
                display: ['block', 'block', 'flex', 'flex', 'flex'],
                paddingBottom: `5%`,
              }}
            >
              <div
                sx={{
                  width: ['100%', '100%', '50%', '50%', '50%'],
                  position: `relative`,
                  ':after': {
                    content: `""`,
                    display: ['none', 'none', 'block', 'block', 'block'],
                    height: `20px`,
                    width: `1px`,
                    height: `50px`,
                    position: `absolute`,
                    top: `0`,
                    right: `0`,
                    backgroundColor: `text`,
                  },
                }}
              >
                <img
                  alt="hipcap1"
                  src={hipcap_1}
                  sx={{
                    padding: ['0', '0', '0 5% 0 0', '0 5% 0 0', '0 5% 0 0'],
                    boxSizing: `border-box`,
                    maxWidth: `100%`,
                  }}
                />
              </div>
              <div
                sx={{
                  width: ['100%', '100%', '35%', '35%', '35%'],
                  padding: ['0', '0', '0 0 0 2%', '0 0 0 2%', '0 0 0 2%'],
                }}
              >
                <Styled.h3
                  sx={{
                    color: `text`,
                    marginBottom: `0`,
                    marginTop: `0`,
                    paddingBottom: `0`,
                  }}
                >
                  1
                </Styled.h3>
                <p
                  sx={{
                    fontWeight: `bold`,
                    fontSize: `2`,
                    color: `text`,
                    marginTop: ['0', '0', 'auto', 'auto', 'auto'],
                  }}
                >
                  Install 2×2 boards along hip area. Board spacing will vary.
                </p>
              </div>
            </div>

            <div
              sx={{
                display: ['block', 'block', 'flex', 'flex', 'flex'],
                paddingBottom: `5%`,
              }}
            >
              <div
                sx={{
                  width: ['100%', '100%', '50%', '50%', '50%'],
                  position: `relative`,
                  ':after': {
                    content: `""`,
                    display: ['none', 'none', 'block', 'block', 'block'],
                    height: `20px`,
                    width: `1px`,
                    height: `50px`,
                    position: `absolute`,
                    top: `0`,
                    right: `0`,
                    backgroundColor: `text`,
                  },
                }}
              >
                <img
                  alt="hipcap2"
                  src={hipcap_2}
                  sx={{
                    padding: ['0', '0', '0 5% 0 0', '0 5% 0 0', '0 5% 0 0'],
                    boxSizing: `border-box`,
                    maxWidth: `100%`,
                  }}
                />
              </div>
              <div
                sx={{
                  width: ['100%', '100%', '35%', '35%', '35%'],
                  padding: ['0', '0', '0 0 0 2%', '0 0 0 2%', '0 0 0 2%'],
                }}
              >
                <Styled.h3
                  sx={{
                    color: `text`,
                    marginBottom: `0`,
                    marginTop: `0`,
                    paddingBottom: `0`,
                  }}
                >
                  2
                </Styled.h3>
                <p
                  sx={{
                    fontWeight: `bold`,
                    fontSize: `2`,
                    color: `text`,
                    marginTop: ['0', '0', 'auto', 'auto', 'auto'],
                  }}
                >
                  Using pre painted weather resistant ring shank nails, fasten
                  hip cap to the 2×2 boards.
                </p>
              </div>
            </div>

            <div
              sx={{
                display: ['block', 'block', 'flex', 'flex', 'flex'],
                paddingBottom: `5%`,
              }}
            >
              <div
                sx={{
                  width: ['100%', '100%', '50%', '50%', '50%'],
                  position: `relative`,
                  ':after': {
                    content: `""`,
                    display: ['none', 'none', 'block', 'block', 'block'],
                    height: `20px`,
                    width: `1px`,
                    height: `50px`,
                    position: `absolute`,
                    top: `0`,
                    right: `0`,
                    backgroundColor: `text`,
                  },
                }}
              >
                <img
                  alt="hipcap3"
                  src={hipcap_3}
                  sx={{
                    padding: ['0', '0', '0 5% 0 0', '0 5% 0 0', '0 5% 0 0'],
                    boxSizing: `border-box`,
                    maxWidth: `100%`,
                  }}
                />
              </div>
              <div
                sx={{
                  width: ['100%', '100%', '35%', '35%', '35%'],
                  padding: ['0', '0', '0 0 0 2%', '0 0 0 2%', '0 0 0 2%'],
                }}
              >
                <Styled.h3
                  sx={{
                    color: `text`,
                    marginBottom: `0`,
                    marginTop: `0`,
                    paddingBottom: `0`,
                  }}
                >
                  3
                </Styled.h3>
                <p
                  sx={{
                    fontWeight: `bold`,
                    fontSize: `2`,
                    color: `text`,
                    marginTop: ['0', '0', 'auto', 'auto', 'auto'],
                  }}
                >
                  Nail placement should be on the bottom left and right side of
                  each hip cap.
                </p>
              </div>
            </div>

            <div
              sx={{
                display: ['block', 'block', 'flex', 'flex', 'flex'],
                paddingBottom: `5%`,
              }}
            >
              <div
                sx={{
                  width: ['100%', '100%', '50%', '50%', '50%'],
                  position: `relative`,
                  ':after': {
                    content: `""`,
                    display: ['none', 'none', 'block', 'block', 'block'],
                    height: `20px`,
                    width: `1px`,
                    height: `50px`,
                    position: `absolute`,
                    top: `0`,
                    right: `0`,
                    backgroundColor: `text`,
                  },
                }}
              >
                <img
                  alt="hipcap4"
                  src={hipcap_4}
                  sx={{
                    padding: ['0', '0', '0 5% 0 0', '0 5% 0 0', '0 5% 0 0'],
                    boxSizing: `border-box`,
                    maxWidth: `100%`,
                  }}
                />
              </div>
              <div
                sx={{
                  width: ['100%', '100%', '35%', '35%', '35%'],
                  padding: ['0', '0', '0 0 0 2%', '0 0 0 2%', '0 0 0 2%'],
                }}
              >
                <Styled.h3
                  sx={{
                    color: `text`,
                    marginBottom: `0`,
                    marginTop: `0`,
                    paddingBottom: `0`,
                  }}
                >
                  4
                </Styled.h3>
                <p
                  sx={{
                    fontWeight: `bold`,
                    fontSize: `2`,
                    color: `text`,
                    marginTop: ['0', '0', 'auto', 'auto', 'auto'],
                  }}
                >
                  As a final check, your hip cap line should appear straight and
                  beautiful.
                </p>
              </div>
            </div>

            <hr sx={{ marginTop: `5%`, marginBottom: `10%` }} />

            <Styled.h2
              sx={{
                color: `text`,
                fontSize: `4`,
                ':after': {
                  backgroundColor: 'text',
                },
              }}
            >
              {sectionOne[0].node.text3}
            </Styled.h2>

            <div
              sx={{
                display: ['block', 'block', 'flex', 'flex', 'flex'],
                paddingBottom: `5%`,
              }}
            >
              <div
                sx={{
                  width: ['100%', '100%', '50%', '50%', '50%'],
                  position: `relative`,
                  ':after': {
                    content: `""`,
                    display: ['none', 'none', 'block', 'block', 'block'],
                    height: `20px`,
                    width: `1px`,
                    height: `50px`,
                    position: `absolute`,
                    top: `0`,
                    right: `0`,
                    backgroundColor: `text`,
                  },
                }}
              >
                <img
                  alt="hipflash1"
                  src={hipflash_1}
                  sx={{
                    padding: ['0', '0', '0 5% 0 0', '0 5% 0 0', '0 5% 0 0'],
                    boxSizing: `border-box`,
                    maxWidth: `100%`,
                  }}
                />
              </div>
              <div
                sx={{
                  width: ['100%', '100%', '35%', '35%', '35%'],
                  padding: ['0', '0', '0 0 0 2%', '0 0 0 2%', '0 0 0 2%'],
                }}
              >
                <Styled.h3
                  sx={{
                    color: `text`,
                    marginBottom: `0`,
                    marginTop: `0`,
                    paddingBottom: `0`,
                  }}
                >
                  1
                </Styled.h3>
                <p
                  sx={{
                    fontWeight: `bold`,
                    fontSize: `2`,
                    color: `text`,
                    marginTop: ['0', '0', 'auto', 'auto', 'auto'],
                  }}
                >
                  Using a Foot brake bend Panel up 2×2 board and even with the
                  top of 2×2 board.
                </p>
              </div>
            </div>

            <div
              sx={{
                display: ['block', 'block', 'flex', 'flex', 'flex'],
                paddingBottom: `5%`,
              }}
            >
              <div
                sx={{
                  width: ['100%', '100%', '50%', '50%', '50%'],
                  position: `relative`,
                  ':after': {
                    content: `""`,
                    display: ['none', 'none', 'block', 'block', 'block'],
                    height: `20px`,
                    width: `1px`,
                    height: `50px`,
                    position: `absolute`,
                    top: `0`,
                    right: `0`,
                    backgroundColor: `text`,
                  },
                }}
              >
                <img
                  alt="hipflash2"
                  src={hipcap_5}
                  sx={{
                    padding: ['0', '0', '0 5% 0 0', '0 5% 0 0', '0 5% 0 0'],
                    boxSizing: `border-box`,
                    maxWidth: `100%`,
                  }}
                />
              </div>
              <div
                sx={{
                  width: ['100%', '100%', '35%', '35%', '35%'],
                  padding: ['0', '0', '0 0 0 2%', '0 0 0 2%', '0 0 0 2%'],
                }}
              >
                <Styled.h3
                  sx={{
                    color: `text`,
                    marginBottom: `0`,
                    marginTop: `0`,
                    paddingBottom: `0`,
                  }}
                >
                  2
                </Styled.h3>
                <p
                  sx={{
                    fontWeight: `bold`,
                    fontSize: `2`,
                    color: `text`,
                    marginTop: ['0', '0', 'auto', 'auto', 'auto'],
                  }}
                >
                  Make sure panel is snug against 2×2 board for optimal hip cap
                  placement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </BackImg>
      <div sx={{ backgroundColor: `text`, position: `relative` }}>
        <div
          sx={{
            position: `absolute`,
            zIndex: `10`,
            top: `-100px`,
            width: `0`,
            height: `0`,
            marginTop: `0`,
            borderBottom: `100px solid #fff`,
            borderLeft: `0 solid transparent`,
            borderRight: `100vw solid transparent`,
          }}
        ></div>
        <Section>
          <div
            sx={{
              display: `flex`,
              paddingBottom: ['15%', '15%', '7%', '7%', '7%'],
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
                {sectionTwo[0].node.text}
              </Styled.h2>
            </div>
            <div
              sx={{
                width: ['100%', '100%', '100%', '55%', '55%'],
                alignSelf: `center`,
                paddingTop: ['0', '0', '5%', '5%', '5%'],
              }}
            >
              <Img
                sx={{
                  width: `384px`,
                  maxWidth: `100%`,
                  backgroundSize: `contain`,
                  display: `inline-block`,
                  marginRight: `10%`,
                }}
                fluid={sectionTwo[0].node.image.childImageSharp.fluid}
              />
              <p sx={{ color: `grey` }}>{sectionTwo[0].node.text2}</p>
              <ButtonV2
                destination="/products"
                buttonText={sectionTwo[0].node.buttonText}
                borderColor="primary"
                color="primary"
              />
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query InstallPageQuery {
    allSection(filter: { page: { eq: "installs" } }) {
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

export default installs
