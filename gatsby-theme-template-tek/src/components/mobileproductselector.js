/** @jsx jsx */
import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { cold } from 'react-hot-loader'
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'
import BackImg from 'gatsby-background-image'

const mobileproductselector = cold((props) => {
  const data = useStaticQuery(graphql`
    query MobileProductSelectorQuery {
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
    return (
      <div
        sx={{
          margin: `3`,
          boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.14)`,
        }}
      >
        <BackImg
          critical
          fluid={product.node.frontmatter.image.childImageSharp.fluid}
          sx={{
            height: `150px`,
            width: `150px`,
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
                fontSize: ['2', '2', '3', '3', '3'],
                color: `text`,
                margin: 0,
                padding: 0,
                display: `inline-block`,
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

        display: [`block`, `block`, `none`, `none`, `none`],
        paddingTop: `2`,
      }}
    >
      <div
        sx={{
          width: `100%`,
          height: `100%`,
          display: `grid`,
          gridTemplateColumns: `repeat(auto-fill, minmax(150px, 1fr))`,
          justifyItems: `center`,
          alignItems: `center`,
        }}
      >
        {outputFrames}
      </div>
    </div>
  )
})

export default mobileproductselector
