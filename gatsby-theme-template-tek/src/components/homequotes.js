/** @jsx jsx */
import Swiper from 'react-id-swiper'
import { graphql, useStaticQuery } from 'gatsby'
import { cold } from 'react-hot-loader'
import { Styled, jsx } from 'theme-ui'
import { Pagination } from 'swiper/dist/js/swiper.esm'

const homecarousel = cold(() => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/hometestimonial/" } }
        ) {
          edges {
            node {
              fileAbsolutePath
              frontmatter {
                quote
                name
                descriptor
                order
              }
            }
          }
        }
      }
    `
  )

  let quotes = data.allMarkdownRemark.edges.map((quote, index) => {
    return (
      <div
        key={`${quote}${index}`}
        sx={{
          height: `80%`,
          padding: `2% 5%`,
          marginBottom: `2`,
          boxSizing: `border-box`,
        }}
      >
        <Styled.h3
          sx={{ fontFamily: 'body', color: 'text', position: `relative` }}
        >
          <div
            sx={{
              position: `relative`,
              ':before': {
                content: `open-quote`,
                fontFamily: `heading`,
                color: 'primary',
                display: `block`,
                position: `absolute`,
                left: `-20px`,
                top: `-20px`,
                fontSize: '8',
              },
              ':after': {
                content: `close-quote`,
                fontFamily: `heading`,
                color: 'primary',
                display: `block`,
                position: `absolute`,
                right: `-20px`,
                bottom: `-20px`,
                fontSize: '8',
              },
            }}
          >
            {quote.node.frontmatter.quote}
          </div>
        </Styled.h3>
        <Styled.p
          sx={{
            fontFamily: 'body',
            padding: `0`,
            margin: `0`,
            color: 'text',
            fontWeight: `bold`,
          }}
        >
          {quote.node.frontmatter.name}
        </Styled.p>
        <Styled.p
          sx={{
            fontFamily: 'body',
            padding: `0 0 5% 0`,
            margin: `0`,
            color: 'text',
          }}
        >
          {quote.node.frontmatter.descriptor}
        </Styled.p>
      </div>
    )
  })

  const params = {
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoplay: true,
  }

  return <Swiper {...params}>{quotes}</Swiper>
})

export default homecarousel
