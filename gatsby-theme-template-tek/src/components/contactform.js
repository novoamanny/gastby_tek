/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'

const contactform = () => {
  return (
    <div>
      <Styled.h1
        sx={{
          color: `secondary`,
          marginBottom: `0`,
          fontSize: ['3', '3', '3', '6', '6'],
        }}
      >
        CONTACT <span sx={{ color: `primary` }}>TEK</span> INDUSTRIES
      </Styled.h1>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        css={css`
          input {
            width: 100%;
            height: 50px;
            background-color: #efefef;
            margin: 10px 0;
            border: 0;
            padding: 0 3%;
            box-sizing: border-box;
            font-size: 18px;
          }
          textarea {
            width: 100%;
            height: 180px;
            background-color: #efefef;
            margin: 10px 0;
            border: 0;
            padding: 3%;
            box-sizing: border-box;
            font-family: inherit;
            font-size: 18px;
          }
          button {
            display: block;
            border: 2px solid #d23a00;
            padding: 15px 30px;
            color: #d23a00;
            cursor: pointer;
            background: #fff;
            font-family: 'Bebas Neue', system-ui, sans-serif;
            font-size: 18px;
          }
        `}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Phone (555-555-5555)"
          name="telephone"
        />
        <textarea
          placeholder="Let us know about your roofing needs"
          name="message"
        ></textarea>
        <button type="submit">Send message</button>
      </form>
      <address sx={{ color: `gray`, fontStyle: `normal`, margin: `5% 0 0 0` }}>
        Corp Office
        <span sx={{ color: `primary`, fontWeight: `bold`, marginLeft: `12px` }}>877-729-5229</span>
        <br />
        <span sx={{ color: `primary`, fontWeight: `bold` }}>
        Monday – Friday 8a.m. - 5p.m. pst
        </span>
        <br />
        Manufactured by TEK Industries, LLC 11801 Pierce Street, Suite 200,
        <br />
        Riverside, California, 92505
      </address>
      <p
        sx={{
          color: `gray`,
          display: ['none', 'none', 'block', 'block', 'block'],
        }}
      >
        At TEK® Industries, our mission is two-fold: to expand our roofing
        family and to renovate the entire roofing market by giving more to
        homeowners.
      </p>
    </div>
  )
}

export default contactform
