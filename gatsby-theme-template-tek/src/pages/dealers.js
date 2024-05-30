/** @jsx jsx */
import React, { useState } from 'react'
import { cold } from 'react-hot-loader'
import { graphql } from 'gatsby'
import BackImg from 'gatsby-background-image'
import { Helmet } from 'react-helmet'
import { Styled, jsx } from 'theme-ui'
import Layout from '../components/layout'
import Section from '../components/section'
import ButtonV2 from '../components/button-v2'
import downloadIcon from '../components/icons/download-icon.png'
import metalShakeImg from '../components/images/tek-panel-sketch.jpg'
import metalShakeXTImg from '../components/images/pro-spec-diagram.png'

const dealers = cold(({ data }) => {
  const sections = data.allSection.edges

  const [internalSection, setSection] = useState(0)

  let sectionOne = sections.filter((obj) => {
    return obj.node.section === 1
  })
  let sectionTwo = sections.filter((obj) => {
    return obj.node.section === 2
  })
  let sectionThree = sections.filter((obj) => {
    return obj.node.section === 3
  })
  let sectionFour = sections.filter((obj) => {
    return obj.node.section === 4
  })

  let SectionChooser = () => {
    return (
      <div
        sx={{
          height: `100px`,
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
        }}
      >
        {[sectionFour[0].node.text3, sectionFour[0].node.text4].map(
          (el, index) => (
            <div
              key={el + index}
              sx={{
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                borderTop: `3px solid #d23a00`,
                borderBottom: `3px solid #d23a00`,
                borderRight: index === 0 ? null : `3px solid #d23a00`,
                borderLeft: index === 1 ? null : `3px solid #d23a00`,
                borderCollapse: `collapse`,
                bg: index === internalSection ? `primary` : null,
                cursor: `pointer`,
                transition: `all .3s ease-in-out`,
                ':hover': {
                  backgroundColor: `primary`,
                  borderRight:
                    index === 0 ? `1px solid #fff` : `3px solid #d23a00`,
                  borderLeft:
                    index === 1 ? `1px solid #fff` : `3px solid #d23a00`,
                },
                ':hover > h3': {
                  color: `text`,
                },
              }}
              onClick={() => setSection(index)}
            >
              <Styled.h3
                sx={{
                  margin: `0`,
                  padding: `0`,
                  fontFamily: 'body',
                  fontSize: ['1', '1', '1', '2', '2'],
                  width: `fit-content`,
                  textAlign: `center`,
                  color: index === internalSection ? `text` : `primary`,
                }}
              >
                {el}
              </Styled.h3>
            </div>
          )
        )}
      </div>
    )
  }

  let selections = data.allMarkdownRemark.edges.map((item, index) => {
    return (
      <div
        key={`selection${index}`}
        sx={{
          bg: `rgba(210, 58, 0, 0.75)`,
          width: `100%`,
          alignItems: `center`,
          textAlign: `center`,
          justifyContent: `center`,
          position: `relative`,
          boxSizing: `border-box`,
          flexBasis: [
            'calc(50% - 20px)',
            'calc(50% - 20px)',
            'calc(50% - 20px)',
            'calc(33.333% - 20px)',
            'calc(33.333% - 20px)',
          ],
          margin: `10px`,
          ':before': {
            content: '""',
            display: `block`,
            paddingTop: `100%`,
          },
        }}
      >
        {item.node.frontmatter.file === null ? (
          <a
            href={item.node.frontmatter.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: `text`,
              textDecoration: `none`,
              fontWeight: `bold`,
            }}
          >
            <div
              sx={{
                height: `100%`,
                width: `100%`,
                position: `absolute`,
                top: `0`,
                left: `0`,
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `center`,
                padding: `5%`,
                boxSizing: `border-box`,
                fontSize: ['3vmin', '3vmin', '3vmin', '1vmin', '13px'],
              }}
            >
              {item.node.frontmatter.title}

              <div
                sx={{
                  color: `text`,
                  textDecoration: `none`,
                  fontWeight: `bold`,
                }}
              >
                <img
                  src={downloadIcon}
                  alt="download"
                  sx={{ marginTop: `20px` }}
                />
              </div>
            </div>
          </a>
        ) : (
          <a
            href={item.node.frontmatter.file}
            sx={{
              color: `text`,
              textDecoration: `none`,
              fontWeight: `bold`,
            }}
          >
            <div
              sx={{
                height: `100%`,
                width: `100%`,
                position: `absolute`,
                top: `0`,
                left: `0`,
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `center`,
                padding: `5%`,
                boxSizing: `border-box`,
                fontSize: ['3vmin', '3vmin', '3vmin', '1vmin', '13px'],
              }}
            >
              {item.node.frontmatter.title}
              <div
                sx={{
                  color: `text`,
                  textDecoration: `none`,
                  fontWeight: `bold`,
                }}
              >
                <img
                  src={downloadIcon}
                  alt="download"
                  sx={{ marginTop: `20px` }}
                />
              </div>
            </div>
          </a>
        )}
      </div>
    )
  })

  let MetalShakeStats = () => {
    return (
      <>
        <table
          sx={{
            width: `100%`,
            border: `2px solid`,
            borderColor: `primary`,
            borderCollapse: `collapse`,
            textAlign: `center`,
            margin: `5% 0`,
            overflowX: `scroll`,
          }}
        >
          <thead>
            <tr>
              <th
                colSpan="2"
                sx={{
                  bg: `text`,
                  borderBottom: `2px solid`,
                  borderColor: `primary`,
                  padding: `1%`,
                  bg: `primary`,
                }}
              >
                <Styled.h3
                  sx={{
                    color: 'text',
                    margin: `0`,
                    padding: `0`,
                    fontSize: ['2', '2', '2', '3', '3'],
                  }}
                >
                  HURRICANE® Metal Shake
                </Styled.h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fdf4f1`,
                  color: `secondary`,
                }}
              >
                Minimum roof pitch
              </td>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fdf4f1`,
                  color: `secondary`,
                }}
              >
                3:12
              </td>
            </tr>
            <tr>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fff`,
                  color: `secondary`,
                }}
              >
                Panel size
              </td>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fff`,
                  color: `secondary`,
                }}
              >
                52-1/2” X 16-1/2”
              </td>
            </tr>
            <tr
              sx={{
                borderLeft: `2px solid`,
                borderRight: `2px solid`,
                borderTop: `2px solid`,
                borderBottom: `none`,
                borderColor: `primary`,
                borderCollapse: `collapse`,
                backgroundColor: `#fdf4f1`,
                color: `secondary`,
              }}
            >
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fdf4f1`,
                  color: `secondary`,
                }}
              >
                Installed exposure
              </td>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fdf4f1`,
                  color: `secondary`,
                }}
              >
                50-3/4” X 14-1/2”
              </td>
            </tr>
            <tr>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fff`,
                  color: `secondary`,
                }}
              >
                Panels per square
              </td>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fff`,
                  color: `secondary`,
                }}
              >
                20
              </td>
            </tr>
            <tr>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fdf4f1`,
                  color: `secondary`,
                }}
              >
                Installed Weight
              </td>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fdf4f1`,
                  color: `secondary`,
                }}
              >
                145.5 lbs/sq
              </td>
            </tr>
          </tbody>
        </table>
        <Styled.h3 sx={{ textAlign: 'center' }}>
          <a
            href="https://www.tdi.texas.gov/company/roofing-discounts.html#metal"
            sx={{ color: 'gray' }}
          >
            Certifications
          </a>
        </Styled.h3>
        <h4 sx={{ color: `primary` }}>Texas Department of Insurance</h4>
        <ul sx={{ color: `secondary` }}>
          <li>
            <a
              sx={{ color: `primary`, textDecoration: `underline` }}
              href="https://www.tdi.texas.gov/company/roofing-discounts.html#metal"
              target="_blank"
            >
              UL 2218 Class IV
            </a>
          </li>
          <li>
            <a
              sx={{ color: `primary`, textDecoration: `underline` }}
              href="https://www.tdi.texas.gov/wind/prod/rc/rc593.pdf"
              target="_blank"
            >
              ASTM E1592
            </a>
          </li>
        </ul>
        <h4 sx={{ color: `primary` }}>Other Specs</h4>
        <ul sx={{ color: `secondary` }}>
          <li>ASTM A792</li>
          <li>ASTM B117</li>
          <li>ASTM E108</li>
          <li>ASTM G155</li>
          <li><a style={{color: '#565656', textDecoration: 'underline'}} target='_blank' href={'https://bpdirectory.intertek.com/pages/DLP_SearchDetail.aspx?SpecID=65038'}>CCRR-0443</a></li>
        </ul>
      </>
    )
  }

  let MetalShakeXTStats = () => {
    return (
      <>
        <table
          sx={{
            width: `100%`,
            border: `2px solid`,
            borderColor: `primary`,
            borderCollapse: `collapse`,
            textAlign: `center`,
            margin: `5% 0`,
            overflowX: `scroll`,
          }}
        >
          <thead>
            <tr>
              <th
                colSpan="2"
                sx={{
                  bg: `text`,
                  borderBottom: `2px solid`,
                  borderColor: `primary`,
                  padding: `1%`,
                  bg: `primary`,
                }}
              >
                <Styled.h3
                  sx={{
                    color: 'text',
                    margin: `0`,
                    padding: `0`,
                    fontSize: ['2', '2', '2', '3', '3'],
                  }}
                >
                  HURRICANE® Metal Shake Pro
                </Styled.h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fdf4f1`,
                  color: `secondary`,
                }}
              >
                Minimum roof pitch
              </td>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fdf4f1`,
                  color: `secondary`,
                }}
              >
                3:12
              </td>
            </tr>
            <tr>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fff`,
                  color: `secondary`,
                }}
              >
                Panel size
              </td>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fff`,
                  color: `secondary`,
                }}
              >
                50-1/2” X 14-1/2”
              </td>
            </tr>
            <tr
              sx={{
                borderLeft: `2px solid`,
                borderRight: `2px solid`,
                borderTop: `2px solid`,
                borderBottom: `none`,
                borderColor: `primary`,
                borderCollapse: `collapse`,
                backgroundColor: `#fdf4f1`,
                color: `secondary`,
              }}
            >
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fdf4f1`,
                  color: `secondary`,
                }}
              >
                Installed exposure
              </td>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fdf4f1`,
                  color: `secondary`,
                }}
              >
                48-3/4” X 13-1/2”
              </td>
            </tr>
            <tr>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fff`,
                  color: `secondary`,
                }}
              >
                Panels per square
              </td>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fff`,
                  color: `secondary`,
                }}
              >
                23
              </td>
            </tr>
            <tr>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fdf4f1`,
                  color: `secondary`,
                }}
              >
                Installed Weight
              </td>
              <td
                sx={{
                  borderLeft: `2px solid`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  borderBottom: `none`,
                  borderColor: `primary`,
                  borderCollapse: `collapse`,
                  backgroundColor: `#fdf4f1`,
                  color: `secondary`,
                }}
              >
                145.5 lbs/sq
              </td>
            </tr>
          </tbody>
        </table>
        <Styled.h3 sx={{ textAlign: 'center' }}>
          <a
            href="https://www.tdi.texas.gov/wind/prod/rc/rc593.pdf"
            sx={{ color: 'gray' }}
          >
            Certifications
          </a>
        </Styled.h3>
        <h4 sx={{ color: `primary` }}>Texas Department of Insurance</h4>
        <ul sx={{ color: `secondary` }}>
          <li>
            <a
              sx={{ color: `primary`, textDecoration: `underline` }}
              href="https://www.tdi.texas.gov/company/roofing-discounts.html#metal"
              target="_blank"
            >
              UL 2218 Class IV
            </a>
          </li>
          <li>
            <a
              sx={{ color: `primary`, textDecoration: `underline` }}
              href="https://www.tdi.texas.gov/wind/prod/rc/rc593.pdf"
              target="_blank"
            >
              ASTM E1592
            </a>
          </li>
        </ul>
        <h4 sx={{ color: `primary` }}>Other Specs</h4>
        <ul sx={{ color: `secondary` }}>
          <li>ASTM A792</li>
          <li>ASTM B117</li>
          <li>ASTM E108</li>
          <li>ASTM G155</li>
          <li><a style={{color: '#565656', textDecoration: 'underline'}} target='_blank' href={'https://bpdirectory.intertek.com/pages/DLP_SearchDetail.aspx?SpecID=65038'}>CCRR-0443</a></li>
        </ul>
        <h4 sx={{ color: `primary` }}>Florida Building Code</h4>
        <ul sx={{ color: `secondary` }}>
          <li>UL 580 Class 90</li>
          <li>UL 1897</li>
          <li>Florida Building Code Approved #FL38136</li>
        </ul>
      </>
    )
  }

  return (
    <Layout>
      <Helmet>
        <title>
          TEK® Industries | TEK Dealer Tools | The Most Durable Roof in the
          Industry
        </title>
        <meta
          name="description"
          content="Partner with TEK Industries to get direct access to the best metal shake products on the market. TEK Industries wants everyone to succeed and progress."
        />
        <meta
          name="keywords"
          content="metal roof, durable roof, durable metal roof, roof for severe weather, metal roof for bad weather, tek roof, tek industries, tek dealer, tek dealer tools, tek partner"
        />
      </Helmet>
      <BackImg
        critical
        fluid={sectionOne[0].node.image.childImageSharp.fluid}
        sx={{ overflow: `hidden` }}
      >
        <div
          sx={{
            position: `absolute`,
            zIndex: `10`,
            bottom: `0`,
            width: `0`,
            height: `0`,
            marginTop: `0`,
            borderBottom: `100vh solid #fff`,
            borderLeft: `100vw solid transparent`,
            borderRight: `0 solid transparent`,
          }}
        ></div>
        <div
          sx={{
            width: `100%`,
            height: `100%`,
            position: `absolute`,
            backgroundColor: `rgba(0,0,0,0.65)`,
          }}
        ></div>
        <Section>
          <div sx={{ position: `relative`, zIndex: `20`, paddingTop: `10%` }}>
            <Styled.h1
              sx={{ color: `text`, marginBottom: `0`, paddingBottom: `1%` }}
            >
              {sectionOne[0].node.text}
            </Styled.h1>
            <Styled.h2
              sx={{
                fontSize: ['3', '3', '4', '4', '4'],
                color: `primary`,
                marginTop: `0`,
                paddingTop: `0`,
                ':after': {
                  display: `none`,
                },
              }}
            >
              {sectionOne[0].node.text2}
            </Styled.h2>

            <div
              sx={{
                display: `flex`,
                marginBottom: `7%`,
                flexDirection: ['column', 'column', 'column', 'row', 'row'],
              }}
            >
              <div sx={{ width: ['100%', '100%', '100%', '45%', '45%'] }}>
                <div
                  key={sectionOne[0].node.id}
                  sx={{
                    width: `100%`,
                  }}
                >
                  <div
                    sx={{
                      display: `flex`,
                      flexWrap: `wrap`,
                      height: `100%`,
                      width: `100%`,
                      marginBottom: `10%`,
                    }}
                  >
                    {selections}
                  </div>
                </div>
              </div>
              <div
                sx={{
                  width: ['100%', '100%', '100%', '55%', '55%'],
                  paddingBottom: ['10%', '10%', '10%', '0', '0'],
                  paddingLeft: `5%`,
                  boxSizing: `border-box`,
                  alignSelf: `center`,
                }}
              >
                <Styled.p sx={{ color: `primary` }}>
                  {sectionOne[0].node.text3}
                </Styled.p>
                {/* <p>
                  <ButtonV2
                    destination="/dealers"
                    buttonText={sectionOne[0].node.buttonText}
                    borderColor="primary"
                    color="primary"
                  />
                </p> */}

                <ButtonV2
                  destination="/installs"
                  buttonText={sectionOne[0].node.buttonText2}
                  borderColor="primary"
                  color="primary"
                />
              </div>
            </div>
          </div>
        </Section>
      </BackImg>
      <div
        sx={{
          backgroundColor: `#fff`,
          overflow: `hidden`,
          padding: `0 0 10% 0`,
        }}
      >
        <Section>
          <Styled.h2 sx={{ color: `primary` }}>
            {sectionTwo[0].node.text}
          </Styled.h2>
          <Styled.p sx={{ color: `grey` }}>{sectionTwo[0].node.text2}</Styled.p>
          <Styled.p sx={{ color: `grey` }}>{sectionTwo[0].node.text3}</Styled.p>
        </Section>
      </div>

      <div
        sx={{
          bg: `primary`,
          display: `flex`,
          justifyContent: `space-between`,
          overflow: `hidden`,
          height: ['auto', 'auto', '40vh', '40vh', '40vh'],
        }}
      >
        <div sx={{ width: ['0', '0', '50%', '50%', '50%'] }}>
          <BackImg
            critical
            fluid={sectionThree[0].node.image.childImageSharp.fluid}
            sx={{ width: `100%`, height: `100%` }}
          >
            <div
              sx={{
                position: `absolute`,
                zIndex: `10`,
                right: `0`,
                width: `0`,
                height: `0`,
                marginTop: `0`,
                borderBottom: `70vh solid #d23a00`,
                borderLeft: `70vw solid transparent`,
                borderRight: `0 solid transparent`,
              }}
            ></div>
            <div
              sx={{
                backgroundColor: `rgb(210, 58, 0, .4)`,
                position: `absolute`,
                zIndex: `10`,
                left: `0`,
                right: `0`,
                width: `100%`,
                height: `100%`,
              }}
            ></div>
          </BackImg>
        </div>
        <div
          sx={{
            width: ['100%', '100%', '50%', '50%', '50%'],
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            padding: ['10% 5%', '10% 5%', '0', '0', '0'],
          }}
        >
          <Styled.h2
            sx={{
              color: `text`,
              marginBottom: `0`,
              marginTop: `0`,
              ':after': {
                backgroundColor: `text`,
              },
            }}
          >
            {sectionThree[0].node.text}
          </Styled.h2>
          <p sx={{ color: `text` }}>{sectionThree[0].node.text2}</p>
          <ButtonV2
            destination="/installs"
            buttonText="INSTALL METHODS"
            borderColor="text"
            color="text"
            hoverBg="text"
            hoverText="primary"
          />
        </div>
      </div>
      <div
        sx={{
          overflow: `hidden`,
          padding: `5% 0`,
        }}
      >
        <Section>
          <SectionChooser />
          <div sx={{ padding: `20px` }}>
            {internalSection === 0 ? (
              <img
                alt="Metal Shake"
                src={metalShakeImg}
                sx={{
                  display: `block`,
                  margin: `0 auto`,
                  marginTop: `20px`,
                  maxWidth: `90%`,
                }}
                alt="panel sketch"
              />
            ) : (
              <img
                alt="Metal Shake Pro"
                src={metalShakeXTImg}
                sx={{
                  display: `block`,
                  margin: `0 auto`,
                  marginTop: `20px`,
                  maxWidth: `90%`,
                }}
                alt="panel sketch"
              />
            )}
          </div>
          {internalSection === 0 ? <MetalShakeStats /> : <MetalShakeXTStats />}
        </Section>
      </div>
    </Layout>
  )
})

export const query = graphql`
  query DealersPageQuery {
    allSection(filter: { page: { eq: "dealers" } }) {
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
          fields {
            slug
          }
          frontmatter {
            title
            file
            url
          }
        }
      }
    }
  }
`

export default dealers
