/** @jsx jsx */
import React, { useState } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { cold } from 'react-hot-loader'
import { jsx } from 'theme-ui'
import { useTransition, animated } from 'react-spring'
import hamburgerIcon from '../components/icons/hamburger.png'
import { MdClose } from 'react-icons/md'

const hamburger = cold(props => {
  const [open, setOpen] = useState(false)

  const transition = useTransition(open, null, {
    from: { transform: `translate(110vw)` },
    enter: { transform: `translate(0)` },
    leave: { transform: `translate(110vw)` },
  })
  return (
    <StaticQuery
      query={graphql`
        query HamburgerQuery {
          site {
            siteMetadata {
              menuLinks {
                link
                name
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div
            sx={{
              position: `fixed`,
              right: `25px`,
              top: `36px`,
              display: ['grid', 'grid', 'grid', 'none', 'none'],
              justifyItems: `right`,
              cursor: `pointer`,
            }}
            onClick={() => setOpen(!open)}
          >
            <div
              style={{
                maskImage: `url(${hamburgerIcon})`,
                WebkitMaskImage: `url(${hamburgerIcon})`,
                width: `30px`,
                height: `30px`,
                maskRepeat: `none`,
                maskSize: `30px`,
                WebkitMaskSize: `30px`,
              }}
              sx={{
                transition: `all 0.3s ease`,
                backgroundColor: `primary`,
                ':hover': { backgroundColor: `secondary` },
              }}
            ></div>
            {transition.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div
                    key={key}
                    style={props}
                    sx={{
                      position: `fixed`,
                      top: `0`,
                      left: `0`,
                      width: `100vw`,
                      height: `100%`,
                      backgroundColor: `primary`,
                      zIndex: `99`,
                    }}
                  >
                    <MdClose
                      sx={{
                        color: `text`,
                        width: `50px`,
                        height: `50px`,
                        position: `absolute`,
                        top: `10px`,
                        right: ['2%', '2%', '50px', '50px', '50px'],
                        zIndex: `100`,
                        cursor: `pointer`,
                      }}
                    />
                    <ul
                      sx={{
                        paddingTop: [5, 5, 5],
                        paddingLeft: [0, 0, 5],
                        margin: [0, 0, 5],
                      }}
                    >
                      {data.site.siteMetadata.menuLinks.map(link => {
                        return (
                          <li
                            sx={{
                              fontSize: [6, 6, 6],
                              fontWeight: 'bold',
                              lineHeight: 'heading',
                              fontFamily: 'heading',
                              listStyle: `none`,
                              margin: 4,
                              width: ['auto', 'auto', '50%'],
                            }}
                            key={link.name}
                          >
                            <Link
                              to={link.link}
                              sx={{
                                color: `text`,
                                position: `relative`,
                                textTransform: 'uppercase',
                                ':hover': {
                                  color: `highlight`,
                                },
                                ':before': {
                                  content: `""`,
                                  position: `absolute`,
                                  width: `100%`,
                                  height: `5px`,
                                  bottom: `0`,
                                  left: `0`,
                                  backgroundColor: `highlight`,
                                  visibility: `hidden`,
                                  webkitTransform: `scaleX(0)`,
                                  transform: `scaleX(0)`,
                                  webkitTransition: `all 0.3s ease-in-out 0s`,
                                  transition: `all 0.3s ease-in-out 0s`,
                                },
                                ':hover:before': {
                                  visibility: `visible`,
                                  webkitTransform: `scaleX(1)`,
                                  transform: `scaleX(1)`,
                                },
                              }}
                            >
                              {link.name}
                            </Link>
                          </li>
                        )
                      })}
                      <li
                        sx={{
                          fontSize: [6, 6, 6],
                          fontWeight: 'bold',
                          lineHeight: 'heading',
                          fontFamily: 'heading',
                          listStyle: `none`,
                          margin: 4,
                          width: ['auto', 'auto', '50%'],
                        }}
                        key="contact-link"
                      >
                        <Link
                          to="/contact"
                          sx={{
                            color: `text`,
                            position: `relative`,
                            textTransform: 'uppercase',
                            ':hover': {
                              color: `highlight`,
                            },
                            ':before': {
                              content: `""`,
                              position: `absolute`,
                              width: `100%`,
                              height: `5px`,
                              bottom: `0`,
                              left: `0`,
                              backgroundColor: `highlight`,
                              visibility: `hidden`,
                              webkitTransform: `scaleX(0)`,
                              transform: `scaleX(0)`,
                              webkitTransition: `all 0.3s ease-in-out 0s`,
                              transition: `all 0.3s ease-in-out 0s`,
                            },
                            ':hover:before': {
                              visibility: `visible`,
                              webkitTransform: `scaleX(1)`,
                              transform: `scaleX(1)`,
                            },
                          }}
                        >
                          CONTACT
                        </Link>
                      </li>
                      <li
                        sx={{
                          fontSize: [6, 6, 6],
                          fontWeight: 'bold',
                          lineHeight: 'heading',
                          fontFamily: 'heading',
                          listStyle: `none`,
                          margin: 4,
                          width: ['auto', 'auto', '50%'],
                        }}
                        key="contact-link"
                      >
                        <Link
                          to="/#tcmap"
                          sx={{
                            color: `text`,
                            position: `relative`,
                            textTransform: 'uppercase',
                            ':hover': {
                              color: `highlight`,
                            },
                            ':before': {
                              content: `""`,
                              position: `absolute`,
                              width: `100%`,
                              height: `5px`,
                              bottom: `0`,
                              left: `0`,
                              backgroundColor: `highlight`,
                              visibility: `hidden`,
                              webkitTransform: `scaleX(0)`,
                              transform: `scaleX(0)`,
                              webkitTransition: `all 0.3s ease-in-out 0s`,
                              transition: `all 0.3s ease-in-out 0s`,
                            },
                            ':hover:before': {
                              visibility: `visible`,
                              webkitTransform: `scaleX(1)`,
                              transform: `scaleX(1)`,
                            },
                          }}
                        >
                          FIND AN INSTALLER
                        </Link>
                      </li>
                    </ul>
                  </animated.div>
                )
            )}
          </div>
        </>
      )}
    />
  )
})

export default hamburger
