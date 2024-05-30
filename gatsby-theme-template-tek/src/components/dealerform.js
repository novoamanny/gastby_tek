/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { css } from '@emotion/core'

const dealerform = () => {
  let states = [
    ['Alabama', 'AL'],
    ['Alaska', 'AK'],
    ['Arizona', 'AZ'],
    ['Arkansas', 'AR'],
    ['California', 'CA'],
    ['Colorado', 'CO'],
    ['Connecticut', 'CT'],
    ['Delaware', 'DE'],
    ['District of Columbia', 'DC'],
    ['Florida', 'FL'],
    ['Georgia', 'GA'],
    ['Hawaii', 'HI'],
    ['Idaho', 'ID'],
    ['Illinois', 'IL'],
    ['Indiana', 'IN'],
    ['Iowa', 'IA'],
    ['Kansas', 'KS'],
    ['Kentucky', 'KY'],
    ['Louisiana', 'LA'],
    ['Maine', 'ME'],
    ['Maryland', 'MD'],
    ['Massachusetts', 'MA'],
    ['Michigan', 'MI'],
    ['Minnesota', 'MN'],
    ['Mississippi', 'MS'],
    ['Missouri', 'MO'],
    ['Montana', 'MT'],
    ['Nebraska', 'NE'],
    ['Nevada', 'NV'],
    ['New Hampshire', 'NH'],
    ['New Jersey', 'NJ'],
    ['New Mexico', 'NM'],
    ['New York', 'NY'],
    ['North Carolina', 'NC'],
    ['North Dakota', 'ND'],
    ['Ohio', 'OH'],
    ['Oklahoma', 'OK'],
    ['Oregon', 'OR'],
    ['Pennsylvania', 'PA'],
    ['Puerto Rico', 'PR'],
    ['Rhode Island', 'RI'],
    ['South Carolina', 'SC'],
    ['South Dakota', 'SD'],
    ['Tennessee', 'TN'],
    ['Texas', 'TX'],
    ['Utah', 'UT'],
    ['Vermont', 'VT'],
    ['Virginia', 'VA'],
    ['Washington', 'WA'],
    ['Washington D.C.', 'DC'],
    ['West Virginia', 'WV'],
    ['Wisconsin', 'WI'],
    ['Wyoming', 'WY'],
    ['Armed Forces America', 'Armed Forces America'],
    ['Armed Forces Europe', 'Armed Forces Europe'],
    ['Armed Forces Pacific', 'Armed Forces Pacific'],
  ]

  return (
    <div>
      <Styled.h1
        sx={{
          color: `secondary`,
          marginBottom: `0`,
          fontSize: ['3', '3', '3', '6', '6'],
        }}
      >
        <span sx={{ color: `primary` }}>TEK</span> DEALER APPLICATION
      </Styled.h1>
      <form
        name="dealer"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        css={css`
          color: #414141;
          label {
            position: absolute;
            left: 0;
            top: -500px;
            width: 1px;
            height: 1px;
            overflow: hidden;
          }
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
          select {
            width: 100%;
            height: 50px;
            background-color: #efefef;
            margin: 10px 0;
            border: 0;
            padding: 0 3%;
            box-sizing: border-box;
            font-size: 18px;
            text-indent: 18px;
          }
          .state_location {
            margin-bottom: 30px;
          }
          input[type='radio'] {
            width: auto;
            height: auto;
          }
          input[type='checkbox'] {
            width: auto;
            height: auto;
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
        <input type="hidden" name="form-name" value="dealer" />
        <p>What state are you in?</p>
        <select name="state_location" className="state_location">
          {states.map(state => {
            return <option value={state[1]}>{state[0]}</option>
          })}
        </select>
        <label htmlFor="company_name">Company Name</label>
        <input type="text" placeholder="Company Name" name="company_name" />
        <label htmlFor="company_address">Company Address</label>
        <input
          type="text"
          placeholder="Company Address"
          name="company_address"
        />
        <label htmlFor="company_website">Company Website</label>
        <input
          type="text"
          placeholder="Company Website"
          name="company_website"
        />
        <label htmlFor="contact_name">Contact Name</label>
        <input type="text" placeholder="Contact Name" name="contact_name" />
        <input type="text" placeholder="Position" name="position" />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" name="email" />
        <label htmlFor="phone">Phone (optional)</label>
        <input type="phone" placeholder="Phone (optional)" name="phone" />
        <p>Number of years in business</p>
        <input type="radio" name="years_in_business" value="1-5" /> 1-5
        <br />
        <input type="radio" name="years_in_business" value="6-10" /> 6-10
        <br />
        <input type="radio" name="years_in_business" value="11-15" /> 11-15
        <br />
        <input type="radio" name="years_in_business" value="15+" /> 15+
        <br />
        <br />
        <p>Gross Annual Revenue</p>
        <input type="radio" name="gross_annual_revenue" value="500k-1m" />{' '}
        $500,000 - $1,000,000
        <br />
        <input type="radio" name="gross_annual_revenue" value="1m-3m" />{' '}
        $1,000,000 - $3,000,000
        <br />
        <input type="radio" name="gross_annual_revenue" value="3m-6m" />{' '}
        $3,000,000 - $6,000,000
        <br />
        <input type="radio" name="gross_annual_revenue" value="6m+" />{' '}
        $6,000,000+
        <br />
        <br />
        <p>Number of Sales Staff</p>
        <input type="radio" name="sales_staff" value="1-5" /> 1-5
        <br />
        <input type="radio" name="sales_staff" value="6-10" /> 6-10
        <br />
        <input type="radio" name="sales_staff" value="11-15" /> 11-15
        <br />
        <input type="radio" name="sales_staff" value="15+" /> 15+
        <br />
        <br />
        <p>Annual Square of Metal Installed</p>
        <input type="radio" name="installed_sq_ft" value="500-1000" /> 500 -
        1,000 sq ft
        <br />
        <input type="radio" name="installed_sq_ft" value="1000-3000" /> 1,000 -
        3,000 sq ft
        <br />
        <input type="radio" name="installed_sq_ft" value="3000-6000" /> 3,000 -
        6,000 sq ft
        <br />
        <input type="radio" name="installed_sq_ft" value="6000+" /> 6,000+
        <br />
        <br />
        <p>Do you have a warehouse with a loading dock?</p>
        <select name="loading_dock">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <p>Square Feet of Warehouse Space</p>
        <input type="radio" name="warehouse_sq_ft" value="500-1000" /> 500 -
        1,000 sq ft
        <br />
        <input type="radio" name="warehouse_sq_ft" value="1000-3000" /> 1,000 -
        3,000 sq ft
        <br />
        <input type="radio" name="warehouse_sq_ft" value="3000-6000" /> 3,000 -
        6,000 sq ft
        <br />
        <input type="radio" name="warehouse_sq_ft" value="6000+" /> 6,000+ sq ft
        <br />
        <br />
        <label htmlFor="how_did_you_hear_about_TEK">
          How did you hear about TEK dealer Plans?
        </label>
        <textarea
          placeholder="How did you hear about TEK dealer Plans?"
          name="how_did_you_hear_about_TEK"
        ></textarea>
        <label htmlFor="describe_why_you_are_for_for_a_dealer">
          Please describe why you would be a good fit for a dealer
        </label>
        <textarea
          placeholder="Please describe why you would be a good fit for a dealer"
          name="describe_why_you_are_for_for_a_dealer"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default dealerform
