/** @jsx jsx */
import React, { useState } from 'react'
import { Styled, jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { cold } from 'react-hot-loader'
import { useTransition, animated } from 'react-spring'
import DrawerModal from '../components/drawermodal'
import HamburgerMenu from './hamburger.js'

const menubar = cold(() => {
  const [show, setShow] = useState(false)
  const [form, setForm] = useState()

  const transition = useTransition(show, null, {
    from: { transform: `translate3d(105vw, 0, 0)` },
    enter: { transform: `translate3d(0,0,0)` },
    leave: { transform: `translate3d(105vw,0, 0)` },
  })

  let showHandler = (form) => {
    setForm(form)
    setShow(!show)
  }
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
          menuLinks {
            name
            link
          }
        }
      }
      file(relativePath: { regex: "images/icon*/" }) {
        childImageSharp {
          fluid(maxHeight: 200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <div
      sx={{
        width: `100vw`,
        height: `100px`,
        position: `fixed`,
        margin: `auto`,
        zIndex: `100`,
        backgroundColor: `background`,
      }}
    >
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <DrawerModal form={form} clickHandler={() => showHandler()} />
            </animated.div>
          )
      )}
      <div
        sx={{
          display: `flex`,
          justifyContent: `space-around`,
          alignItems: `center`,
          height: ['100%', '100%', '100%', 'auto', 'auto'],
        }}
      >
        <div
          sx={{
            width: ['50%', '50%', '50%', '20%', '20%'],
            height: ['auto', 'auto', 'auto', '100%', '100%'],
            position: `relative`,
            alignSelf: `center`,
            justifySelf: `center`,
          }}
        >
          <Link to="/" state={{ fromPage: true, passed: 0 }}>
            <Img
              sx={{
                maxWidth: `382px`,
              }}
              fluid={data.file.childImageSharp.fluid}
            />
          </Link>
        </div>
        <div
          sx={{
            justifySelf: `center`,
            height: `100%`,
            display: ['none', 'none', 'none', 'block', 'block'],
          }}
        >
          <Styled.ul sx={{ height: `100%`, display: `table` }}>
            {data.site.siteMetadata.menuLinks.map((link) => {
              return (
                <Styled.li key={link.name} sx={{ display: `table-cell` }}>
                  <Link
                    exact="true"
                    to={link.link}
                    state={{ passed: 0, fromPage: true }}
                    sx={{
                      textDecoration: `none`,
                      color: `secondary`,
                      fontFamily: `heading`,
                      fontSize: '25px',
                      verticalAlign: `middle`,
                      lineHeight: `100px`,
                      transition: `all 0.2s ease`,
                      ':hover': {
                        color: `primary`,
                      },
                    }}
                    activeClassName="active"
                  >
                    {link.name}
                  </Link>
                </Styled.li>
              )
            })}
            <Styled.li
              key="liLinkMenuLast"
              onClick={() => showHandler('contact')}
            >
              <div
                sx={{
                  textDecoration: `none`,
                  color: `secondary`,
                  fontFamily: `heading`,
                  fontSize: '25px',
                  verticalAlign: `middle`,
                  lineHeight: `100px`,
                  display: `inline-block`,
                  verticalAlign: `middle`,
                  cursor: `pointer`,
                  transition: `all 0.2s ease`,
                  ':hover': {
                    color: `primary`,
                  },
                }}
              >
                Contact
              </div>
            </Styled.li>
          </Styled.ul>
        </div>
        <div
          sx={{
            display: ['none', 'none', 'none', 'flex', 'flex'],
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <div sx={{ marginRight: `20px` }}>
            <Link to="/#tcmap" state={{ fromPage: true, passed: 0 }}>
              <div
                sx={{
                  color: 'text',
                  bg: 'primary',
                  fontFamily: 'heading',
                  fontSize: [`16px`, `16px`, `16px`, `16px`, `25px`],
                  letterSpacing: 1,
                  width: [`100px`, `100px`, `100px`, `100px`, `fit-content`],
                  margin: `auto`,
                  textAlign: `center`,
                  padding: 0,
                  lineHeight: `header`,
                  border: `none`,
                  borderColor: `primary`,
                  boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
                }}
              >
                <p
                  sx={{
                    paddingLeft: 4,
                    paddingRight: 4,
                    paddingTop: 1,
                    paddingBottom: 1,
                    margin: `0`,
                    transition: `all 0.2s ease`,
                    cursor: `pointer`,
                    ':hover': {
                      backgroundColor: `text`,
                      color: `primary`,
                    },
                  }}
                >
                  FIND AN INSTALLER
                </p>
              </div>
            </Link>
          </div>
          <div
            onClick={() => showHandler('dealer')}
            sx={{
              display: ['none', 'none', 'none', 'flex', 'flex'],
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <div
              sx={{
                color: 'text',
                bg: 'primary',
                fontFamily: 'heading',
                fontSize: [`16px`, `16px`, `16px`, `16px`, `25px`],
                letterSpacing: 1,
                width: [`100px`, `100px`, `100px`, `100px`, `fit-content`],
                margin: `auto`,
                textAlign: `center`,
                padding: 0,
                lineHeight: `header`,
                border: `none`,
                borderColor: `primary`,
                boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
              }}
            >
              <p
                sx={{
                  paddingLeft: 4,
                  paddingRight: 4,
                  paddingTop: 1,
                  paddingBottom: 1,
                  margin: `0`,
                  transition: `all 0.2s ease`,
                  cursor: `pointer`,
                  ':hover': {
                    backgroundColor: `text`,
                    color: `primary`,
                  },
                }}
              >
                BECOME A DEALER
              </p>
            </div>
          </div>
        </div>
        <HamburgerMenu sx={{ justifySelf: `center`, alignSelf: `center` }} />
      </div>
    </div>
  )
})

export default menubar
