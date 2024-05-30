/** @jsx jsx */
import { Layout as ThemeLayout, Header, Main, jsx } from 'theme-ui'
import MenuBar from '../components/menubar'
import Footer from '../components/footer'
import { Helmet } from 'react-helmet'
import favicon32 from '../components/icons/TEK_Favicon_-32x32.png'
import './layout.css'

// Workaround to enable netlify form in modal to function

const ContactHidden = () => {
  return (
    <div sx={{ display: `none` }}>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Name <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <input type="tel" placeholder="Phone (555-555-5555)" name="telephone" />
        <textarea name="message"></textarea>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

const DealerHidden = () => {
  return (
    <div sx={{ display: `none` }}>
      <form
        name="dealer"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="dealer" />
        <input type="text" placeholder="Company Name" name="company_name" />
        <select name="state_location" className="state_location">
          <option value="AL">Alabama</option>
        </select>
        <input
          type="text"
          placeholder="Company Address"
          name="company_address"
        />
        <input
          type="text"
          placeholder="Company Website"
          name="company_website"
        />
        <input type="text" placeholder="Contact Name" name="contact_name" />
        <input type="text" placeholder="Position" name="position" />
        <input type="email" placeholder="Email" name="email" />
        <input type="phone" placeholder="Phone (optional)" name="phone" />
        <input type="radio" name="years_in_business" value="1-5" /> 1-5
        <input type="radio" name="years_in_business" value="6-10" /> 6-10
        <input type="radio" name="years_in_business" value="11-15" /> 11-15
        <input type="radio" name="years_in_business" value="15+" /> 15+
        <input type="radio" name="gross_annual_revenue" value="500k-1m" />
        $500,000 - $1,000,000
        <input type="radio" name="gross_annual_revenue" value="1m-3m" />
        $1,000,000 - $3,000,000
        <input type="radio" name="gross_annual_revenue" value="3m-6m" />
        $3,000,000 - $6,000,000
        <input type="radio" name="gross_annual_revenue" value="6m+" />
        $6,000,000+
        <input type="radio" name="sales_staff" value="1-5" /> 1-5
        <input type="radio" name="sales_staff" value="6-10" /> 6-10
        <input type="radio" name="sales_staff" value="11-15" /> 11-15
        <input type="radio" name="sales_staff" value="15+" /> 15+
        <input type="radio" name="installed_sq_ft" value="500-1000" /> 500 -
        1,000 sq ft
        <input type="radio" name="installed_sq_ft" value="1000-3000" /> 1,000 -
        3,000 sq ft
        <input type="radio" name="installed_sq_ft" value="3000-6000" /> 3,000 -
        6,000 sq ft
        <input type="radio" name="installed_sq_ft" value="6000+" /> 6,000+
        <select name="loading_dock">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <input type="radio" name="warehouse_sq_ft" value="500-1000" /> 500 -
        1,000 sq ft
        <input type="radio" name="warehouse_sq_ft" value="1000-3000" /> 1,000 -
        3,000 sq ft
        <input type="radio" name="warehouse_sq_ft" value="3000-6000" /> 3,000 -
        6,000 sq ft
        <input type="radio" name="warehouse_sq_ft" value="6000+" /> 6,000+ sq ft
        <textarea name="how_did_you_hear_about_TEK"></textarea>
        <textarea name="describe_why_you_are_for_for_a_dealer"></textarea>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

/////

const Layout = ({ children }) => {
  return (
    <ThemeLayout>
      <Helmet>
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      </Helmet>
      <Header>
        <ContactHidden />
        <DealerHidden />
        <MenuBar />
      </Header>
      <Main sx={{ paddingTop: `100px` }}>{children}</Main>
      <Footer />
    </ThemeLayout>
  )
}

export default Layout
