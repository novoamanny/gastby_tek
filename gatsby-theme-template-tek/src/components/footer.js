/** @jsx jsx */
import { useStaticQuery, graphql, Link } from 'gatsby'
import { cold } from 'react-hot-loader'
import { Styled, jsx, Footer } from 'theme-ui'
import Img from 'gatsby-image'
import { FaFacebookF } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import file from './pdf/salesandconditions.pdf'

const footer = cold(() => {
  const data = useStaticQuery(
    graphql`
      query FooterQuery {
        allSection(filter: { page: { eq: "footer" } }) {
          edges {
            node {
              id
              links {
                link
                linktext
              }
              sociallinks {
                facebook
                insta
                linkedin
                twitter
              }
              text
              text2
              text3
              image {
                childImageSharp {
                  fluid(maxHeight: 300, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
        file(relativePath: { regex: "images/icon*/" }) {
          id
          childImageSharp {
            fluid(maxHeight: 100, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  let links = data.allSection.edges[0].node.links.map((link, index) => {
    return (
      <Styled.li
        key={link.linktext}
        sx={{
          color: `text`,
          listStyleType: `none`,
          fontSize: `25px`,
          fontFamily: `heading`,
          display: `inline-block`,
          marginRight: `10%`,
          ':after': { display: `none` },
          ':last-child': { marginRight: `0` },
        }}
      >
        {index === 3 ? (
          <a target="_blank" href={file} sx={{ color: 'text' }}>
            {link.linktext}
          </a>
        ) : (
          <Link to={link.link} sx={{ color: 'text' }}>
            {link.linktext}
          </Link>
        )}
      </Styled.li>
    )
  })

  return (
    <Footer>
      <div
        sx={{
          minHeight: `300px`,
          width: `100%`,
          backgroundColor: `secondary`,
          padding: `5%`,
          position: `relative`,
        }}
      >
        <div
          sx={{
            display: ['block', 'block', 'block', 'flex', 'flex'],
            justifyContent: `space-around`,
          }}
        >
          <div sx={{ paddingRight: `20px` }}>
            <Styled.h3
              sx={{
                gridColumnStart: `1`,
                gridColumnEnd: `end`,
                fontSize: '4',
                color: `text`,
                margin: [
                  '5% 0 5% 0',
                  '5% 0 5% 0',
                  '5% 0 5% 0',
                  '0 0 3% 0',
                  '0 0 3% 0',
                ],
                padding: `0`,
                lineHeight: `1em`,
              }}
            >
              {data.allSection.edges[0].node.text}
              <span
                sx={{
                  color: `primary`,
                  marginLeft: `0.1em`,
                  marginRight: `0.1em`,
                  fontSize: 6,
                }}
              >
                {data.allSection.edges[0].node.text2}
              </span>
              {data.allSection.edges[0].node.text3}
            </Styled.h3>
            <Styled.ul
              sx={{ margin: ['5% 0 5% 0', '5% 0 5% 0', '5% 0 5% 0', '0', '0'] }}
            >
              {links}
            </Styled.ul>
          </div>
          <div
            sx={{
              paddingRight: `20px`,
              margin: ['5% 0 5% 0', '5% 0 5% 0', '5% 0 5% 0', '0', '0'],
              color: `text`,
            }}
          >
            <address
              sx={{ fontStyle: `normal`, fontFamily: 'heading', fontSize: '2' }}
            >
              <h3
                sx={{
                  margin: `0`,
                  padding: `0`,
                  color: `text`,
                  ':after': {
                    content: `""`,
                    display: `inline-block`,
                    width: `2px`,
                    height: `18px`,
                    backgroundColor: 'primary',
                    marginLeft: `10px`,
                  },
                }}
              >
                Address
              </h3>
              <p sx={{ marginTop: `0`, color: `text` }}>
                Manufactured by TEK Industries LLC
                <br />
                11801 Pierce Street, Suite 200
                <br />
                Riverside, California, 92505
              </p>
            </address>
          </div>
          <div
            sx={{
              fontFamily: 'heading',
              fontSize: '2',
              paddingRight: `20px`,
              margin: ['5% 0 5% 0', '5% 0 5% 0', '5% 0 5% 0', '0', '0'],
              color: `text`,
            }}
          >
            <h3
              sx={{
                margin: `0`,
                padding: `0`,
                color: `text`,
                ':after': {
                  content: `""`,
                  display: `inline-block`,
                  width: `2px`,
                  height: `18px`,
                  backgroundColor: 'primary',
                  marginLeft: `10px`,
                },
              }}
            >
              Phone
            </h3>
            <p sx={{ marginTop: `0`, color: `text` }}>
              Corp Office
              <br />
              877-729-5229
              <br />
              Monday – Friday 8a.m. to 5p.m. pst
            </p>
          </div>
          <div>
            <Styled.ul sx={{ display: `flex`, justifyContent: `center` }}>
              <li
                sx={{
                  display: `inline-block`,
                  textAlign: `center`,
                  padding: `0 10px`,
                }}
              >
                <a
                  href="https://www.facebook.com/TEK-Industries-Metal-Roofing-Supply-620992491686019/"
                  sx={{ color: 'text' }}
                >
                  <FaFacebookF sx={{ fontSize: '3' }} />
                </a>
              </li>
              <li
                sx={{
                  display: `inline-block`,
                  textAlign: `center`,
                  padding: `0 10px`,
                }}
              >
                <a
                  href="https://www.youtube.com/channel/UCrRlytpQNeJsq46rrSmStMw/featured"
                  sx={{ color: 'text' }}
                >
                  <FaYoutube sx={{ fontSize: '3' }} />
                </a>
              </li>
            </Styled.ul>
          </div>
          <div
            sx={{
              position: [
                'relative',
                'relative',
                'relative',
                'absolute',
                'absolute',
              ],
              left: `0`,
              right: `0`,
              bottom: `5%`,
              margin: `auto`,
              textAlign: `center`,
            }}
          >
            <Styled.p
              sx={{ fontSize: `16px`, color: `#BABABA`, lineHeight: `1.25` }}
            >
              Contact us today to find out how you can take advantage of this
              transformation in the industry.
              <br />
              Copyright © {new Date().getFullYear()} TEK Industries. All rights
              reserved.
            </Styled.p>
          </div>
        </div>
        <div
          sx={{
            position: [
              'relative',
              'relative',
              'relative',
              'absolute',
              'absolute',
            ],
            right: `5%`,
            bottom: `10%`,
            display: ['none', 'none', 'none', 'block', 'block'],
          }}
        >
          <Link to="/">
            <Img
              alt="home"
              sx={{ width: `87px`, backgroundSize: `contain` }}
              fluid={data.allSection.edges[0].node.image.childImageSharp.fluid}
            />
          </Link>
        </div>
      </div>
    </Footer>
  )
})

export default footer
