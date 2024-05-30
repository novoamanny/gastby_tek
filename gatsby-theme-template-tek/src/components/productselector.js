/** @jsx jsx */
import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { cold } from 'react-hot-loader'
import { jsx } from 'theme-ui'
import { css } from '@emotion/core'
import BackImg from 'gatsby-background-image'

const productselector = cold((props) => {
  const [activeFrame, setActiveFrame] = useState(`frame1`)

  const data = useStaticQuery(graphql`
    query ProductSelectorQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___order }
        filter: { fileAbsolutePath: { regex: "/productselector/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              image {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              order
            }
          }
        }
      }
    }
  `)

  let outputFrames = data.allMarkdownRemark.edges.map((product, index) => {
    let indexNum = index + 1
    return (
      <div
        onMouseEnter={() => setActiveFrame(`frame${indexNum}`)}
        key={`${product}${index}`}
        sx={{
          position: `relative`,
          height: `400px`,
          width: activeFrame === `frame${indexNum}` ? `25%` : `15%`,
          filter:
            activeFrame === `frame${indexNum}`
              ? `brightness(1)`
              : `brightness(50%)`,
          display: `inline-block`,
          whiteSpace: `nowrap`,
          boxSizing: `border-box`,
        }}
        css={css`
          transition: transform 0.8s ease-in-out, width 0.5s, filter 0.5s;
        `}
      >
        <BackImg
          critical
          fluid={product.node.frontmatter.image.childImageSharp.fluid}
          sx={{
            height: `100%`,
            width: `100%`,
          }}
        >
          <div
            sx={{
              width: `100%`,
              height: `100%`,
              display: `grid`,
              justifyItems: `center`,
              alignItems: `center`,
            }}
          >
            <p
              sx={{
                fontFamily: `heading`,
                fontSize: ['3', '3', '3', '5', '5'],
                color: `text`,
                margin: 0,
                padding: 0,
                display: `inline-block`,
                transition: `all 0.3s ease`,
                transform:
                  activeFrame === `frame${indexNum}` ? null : `rotate(90deg)`,
              }}
            >
              {product.node.frontmatter.title}
            </p>
          </div>
        </BackImg>
      </div>
    )
  })

  return (
    <div
      sx={{
        width: `100vw`,
        backgroundColor: `#1E2121`,
        display: [`none`, `none`, `block`, `block`, `block`],
      }}
    >
      {outputFrames}
    </div>
  )
})

export default productselector
