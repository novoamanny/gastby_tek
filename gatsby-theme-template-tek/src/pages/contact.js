/** @jsx jsx */
import React, { useState } from 'react'
import { Styled, jsx } from 'theme-ui'
import { cold } from 'react-hot-loader'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ContactForm from '../components/contactform'
import DealerForm from '../components/dealerform'

const contact = cold(() => {
  const [firstSection, setFirstSection] = useState(0)

  let SectionChooser = () => {
    return (
      <div
        sx={{
          height: `100px`,
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
        }}
      >
        {['CONTACT', 'BECOME A DEALER'].map((el, index) => (
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
              bg: index === firstSection ? `primary` : null,
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
            onClick={() => setFirstSection(index)}
          >
            <Styled.h3
              sx={{
                margin: `0`,
                padding: `0`,
                fontFamily: 'body',
                fontSize: ['2', '2', '2', '3', '3'],
                width: `fit-content`,
                textAlign: `center`,
                color: index === firstSection ? `text` : `primary`,
              }}
            >
              {el}
            </Styled.h3>
          </div>
        ))}
      </div>
    )
  }

  return (
    <Layout>
      <Helmet>
        <title>TEK® Industries | Contact Us</title>
      </Helmet>
      <div
        sx={{
          width: [`80%`, `80%`, `80%`, `800px`, `800px`],
          margin: `40px auto`,
          padding: `2`,
        }}
      >
        <SectionChooser />
        {firstSection === 0 ? <ContactForm /> : <DealerForm />}
      </div>
    </Layout>
  )
})

export default contact
