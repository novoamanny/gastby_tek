/** @jsx jsx */
import React from 'react'
import Section from '../components/section'
import mobile_diagram from '../components/images/mobilediagram.jpg'
import { jsx } from 'theme-ui'

const mobilediagram = () => {
  return (
    <>
      <img
        alt="mobile_diagram"
        src={mobile_diagram}
        sx={{
          padding: `0 5%`,
          boxSizing: `border-box`,
          maxWidth: `100%`,
        }}
      />
      <div
        sx={{ backgroundColor: `gray`, overflow: `hidden`, padding: `5% 0` }}
      >
        <Section>
          <div
            sx={{
              width: `100%`,
              paddingBottom: 0,
              alignSelf: `center`,
            }}
          >
            <ol>
              <li sx={{ color: 'text', fontWeight: `bold` }}>
                Clear Acrylic Overglaze
              </li>
              <p sx={{ color: `text`, marginTop: `0` }}>
                Increases brightness and bonding strength, while preventing
                water penetration to sublayers and granular structure.
              </p>
              <li sx={{ color: 'text', fontWeight: `bold` }}>
                Natural Stone Chips
              </li>
              <p sx={{ color: `text`, marginTop: `0` }}>
                With natural UV protection, the stone layer is what gives the
                metal shake its beauty and color while also reducing noise from
                rain or hail.
              </p>
              <li sx={{ color: 'text', fontWeight: `bold` }}>Basecoat</li>
              <p sx={{ color: `text`, marginTop: `0` }}>
                Bonds the stone layer to the steel base and provides added
                protection to the sublayers.
              </p>
              <li sx={{ color: 'text', fontWeight: `bold` }}>
                Acrylic Resin Protective Coating
              </li>
              <p sx={{ color: `text`, marginTop: `0` }}>
                Protects the aluminum zinc layer while enhancing color adhesion
                and vibrancy.
              </p>
              <li sx={{ color: 'text', fontWeight: `bold` }}>Aluminum Zinc</li>
              <p sx={{ color: `text`, marginTop: `0` }}>
                With heat-reflective properties and strong corrosion resistance,
                this layer provides exceptional energy efficiency as well as
                added durability.
              </p>
              <li sx={{ color: 'text', fontWeight: `bold` }}>Steel Base</li>
              <p sx={{ color: `text`, marginTop: `0` }}>
                High-strength steel provides the foundation for the most durable
                and beautiful roofing product on the market.
              </p>
              <li sx={{ color: 'text', fontWeight: `bold` }}>Aluminum Zinc</li>
              <p sx={{ color: `text`, marginTop: `0` }}>
                The steel base is sandwiched in between two aluminum zinc layers
                and bonded together. This layer reflects heat for energy
                efficiency and provides added durability and protection.
              </p>
              <li sx={{ color: 'text', fontWeight: `bold` }}>
                Acrylic Resin Protective Coating
              </li>
              <p sx={{ color: `text`, marginTop: `0` }}>
                Protects the aluminum zinc layer while enhancing color adhesion
                and vibrancy.
              </p>
              <li sx={{ color: 'text', fontWeight: `bold` }}>
                Foam Insulation (Patent Pending)
              </li>
              <p sx={{ color: `text`, marginTop: `0` }}>
                Our exclusive foam layer was developed to provide both
                structural support and exceptional insulating properties.
              </p>
            </ol>
            <p></p>
          </div>
        </Section>
      </div>
    </>
  )
}

export default mobilediagram
