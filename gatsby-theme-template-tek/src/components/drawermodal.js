/** @jsx jsx */
import { jsx } from 'theme-ui'
import { MdClose } from 'react-icons/md'
import Contact from './contactform'
import Dealer from './dealerform'

const drawermodal = props => {
  return (
    <div
      sx={{
        width: `100vw`,
        position: `absolute`,
        zIndex: `9998`,
        height: `100vh`,
        top: 0,
        left: 0,
        display: `grid`,
        gridTemplateColumns: [
          '0 100%',
          '0 100%',
          '0 100%',
          '30% 70%',
          '40% 60%',
        ],
        gridTemplateRows: `100%`,
      }}
    >
      <div sx={{ background: `rgba(0,0,0,0.6)` }}></div>
      <div
        sx={{
          background: `white`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          overflowY: `scroll`,
          flexDirection: `column`,
        }}
      >
        <MdClose
          onClick={props.clickHandler}
          sx={{
            color: `secondary`,
            width: `50px`,
            height: `50px`,
            position: `absolute`,
            top: ['10%', '10%', '50px', '50px', '50px'],
            right: ['2%', '2%', '50px', '50px', '50px'],
            zIndex: `100`,
            cursor: `pointer`,
          }}
        />
        <div sx={{ width: `80%`, overflowY: `scroll`, padding: `0 5% 5% 5%` }}>
          {(() => {
            switch (props.form) {
              case 'contact':
                return <Contact />
              case 'dealer':
                return <Dealer />
              default:
                return null
            }
          })()}
        </div>
      </div>
    </div>
  )
}

export default drawermodal
