/** @jsx jsx */
import React, { useState } from 'react'
import { cold } from 'react-hot-loader'
import { Styled, jsx } from 'theme-ui'
import Img from 'gatsby-image'
import BackImg from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../components/section'
import ButtonV2 from '../components/button-v2'

const menubar = cold(() => {
  const [slide, setSlide] = useState(0)

  let slideHandler = (index) => {
    setSlide(index)
  }
  const data = useStaticQuery(graphql`
    query HomeScrollerQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___order }
        filter: { fileAbsolutePath: { regex: "/homescroller/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              name
              image {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              tabImage {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              buttonText
              buttonURL
              headerTopLine
              headerLargeWord
              headerBottomLine
              detail
              order
            }
          }
        }
      }
    }
  `)

  let slides = data.allMarkdownRemark.edges.map((node, index) => {
    return (
      <div sx={{ backgroundColor: `black` }}>
        <BackImg fluid={node.node.frontmatter.image.childImageSharp.fluid}>
          <div
            sx={{
              width: `100%`,
              height: `100%`,
              position: `absolute`,
              backgroundColor: `rgba(0,0,0,0.25)`,
            }}
          ></div>
          <div
            key={node.node.id}
            sx={{
              width: `100%`,
              height: `600px`,
              position: `relative`,
              ':after': {
                content: `""`,
                position: `absolute`,
                zIndex: `-1`,
                bottom: `0`,
                left: `0`,
                right: `0`,
                width: `100%`,
                height: `100%`,
                margin: `0 auto`,
                display: `block`,
                background: `-moz-linear-gradient(left,  rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)`,
                background: `-webkit-linear-gradient(left,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)`,
                background: `linear-gradient(to right,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)`,
              },
            }}
          >
            <div
              sx={{
                height: `fit-content`,
                padding: [10, 10, 12],
              }}
            >
              <Styled.h1
                sx={{
                  margin: '0',
                  paddingTop: [5, 4, 3],
                  paddingBottom: 0,
                  textAlign: `left`,
                  fontSize: [4, 4, 6],
                  width: ['100%', '100%', '100%', '100%', '100%'],
                  color: 'background',
                }}
              >
                {node.node.frontmatter.headerTopLine}
                <span
                  sx={{
                    color: 'primary',
                    fontSize: ['7', '7', '7', '10', '10'],
                    paddingLeft: 2,
                  }}
                >
                  {node.node.frontmatter.headerLargeWord}
                </span>
                <span sx={{ display: `block` }}>
                  {node.node.frontmatter.headerBottomLine}
                </span>
              </Styled.h1>
              <Styled.h3
                sx={{
                  margin: '0',
                  marginTop: `2`,
                  textAlign: `left`,
                  fontSize: [`18px`, 2, 2, 2, 2],
                  color: 'text',
                  fontFamily: `body`,
                  width: [`100%`, `100%`, `60%`, `40%`, `40%`],
                }}
              >
                {node.node.frontmatter.detail}
              </Styled.h3>
              {node.node.frontmatter.buttonText !== null ? (
                <ButtonV2
                  destination={node.node.frontmatter.buttonURL}
                  buttonText={node.node.frontmatter.buttonText}
                  borderColor="background"
                  color="text"
                  passed={index === 2 ? 1 : 0}
                />
              ) : null}
            </div>
          </div>
        </BackImg>
      </div>
    )
  })

  let selectors = data.allMarkdownRemark.edges.map((node, index) => {
    return (
      <div
        key={`${node}${index}`}
        onClick={() => slideHandler(index)}
        sx={{
          cursor: `pointer`,
        }}
      >
        <BackImg
          critical
          fluid={node.node.frontmatter.tabImage.childImageSharp.fluid}
          sx={{
            height: `100%`,
          }}
        >
          <div
            sx={{
              position: `relative`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `flex-start`,
              height: `100%`,
              ':after': {
                content: `""`,
                position: `absolute`,
                zIndex: `-1`,
                bottom: `0`,
                left: `0`,
                right: `0`,
                width: `100%`,
                height: `100%`,
                margin: `0 auto`,
                display: `block`,
                backgroundColor:
                  index === slide ? `rgba(210,58,0,0.7)` : `rgba(0,0,0,0.5)`,
              },
              ':hover': {
                backgroundColor: `rgba(210,58,0,0.7)`,
                transition: `0.4s`,
              },
            }}
          >
            <Styled.h2
              sx={{
                fontSize: ['2', '3', '4', '6', '6'],
                padding: `0 0 0 10%`,
                width: ['100%', '100%', '100%', '60%', '60%'],
                color: 'background',
                margin: `0`,
                ':after': {
                  display: `none`,
                },
              }}
            >
              {node.node.frontmatter.name}
            </Styled.h2>
          </div>
        </BackImg>
      </div>
    )
  })
  return (
    <>
      {slides[slide]}
      <Section sx={{ width: ['100%', '100%', '100%', '85%', '85%'] }}>
        <div
          sx={{
            backgroundColor: `black`,
            height: ['140px', '140px', '140px', '200px', '200px'],
            display: `grid`,
            gridTemplateColumns: `33.33% 33.33% 33.33%`,
            position: 'relative',
            transform: [
              `translate(0, -25%)`,
              `translate(0, -25%)`,
              `translate(0, -40%)`,
              `translate(0, -50%)`,
              `translate(0, -50%)`,
            ],
          }}
        >
          {selectors}
        </div>
      </Section>
    </>
  )
})

export default menubar
