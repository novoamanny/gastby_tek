/** @jsx jsx */
import { Link } from 'gatsby'
import { Styled, jsx } from 'theme-ui'

const button = props => {
  return (
    <Link
      to={props.destination}
      sx={{
        textDecoration: `none`,
      }}
    >
      <div
        sx={{
          color: 'text',
          bg: 'primary',
          fontFamily: 'heading',
          fontSize: `25px`,
          letterSpacing: 1,
          width: `fit-content`,
          margin: `auto`,
          textAlign: `center`,
          padding: 0,
          lineHeight: `header`,
          border: `none`,
          borderColor: `primary`,
          boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
          transition: `all 0.2s ease`,
          cursor: `pointer`,
          ':hover': {
            backgroundColor: `text`,
            color: `primary`,
          },
        }}
      >
        <p
          sx={{
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 1,
            paddingBottom: 1,
          }}
        >
          {props.buttonText}
        </p>
      </div>
    </Link>
  )
}

export default button
