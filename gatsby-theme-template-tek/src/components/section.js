/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container } from 'theme-ui'

const section = props => {
  return (
    <Container>
      <div
        sx={{
          position: `relative`,
        }}
      >
        <div
          sx={{
            width: `85%`,
            margin: `auto`,
          }}
        >
          {props.children}
        </div>
      </div>
    </Container>
  )
}

export default section
