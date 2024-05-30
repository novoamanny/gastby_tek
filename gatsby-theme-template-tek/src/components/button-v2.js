/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'

const button = props => {
  return (
    <Link
      to={props.destination}
      state={{ passed: props.passed, fromPage: 1 }}
      sx={{
        textDecoration: `none`,
      }}
    >
      <div
        sx={{
          color: `${props.color}`,
          bg: 'none',
          fontFamily: 'heading',
          fontSize: `2` + '5px',
          letterSpacing: 1,
          width: `fit-content`,
          textAlign: `center`,
          padding: 0,
          lineHeight: `header`,
          border: `2px solid`,
          borderColor: `${props.borderColor}`,
          transition: `all 0.2s ease`,
          cursor: `pointer`,
          ':hover': {
            backgroundColor: props.hoverBg ? `${props.hoverBg}` : `primary`,
            color: props.hoverText ? `${props.hoverText}` : `text`,
          },
        }}
      >
        <p
          sx={{
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 2,
            paddingBottom: 2,
            margin: 0,
          }}
        >
          {props.buttonText}
        </p>
      </div>
    </Link>
  )
}

export default button
