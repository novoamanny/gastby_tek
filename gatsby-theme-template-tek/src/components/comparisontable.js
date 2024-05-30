/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import checkMark from '../components/icons/check-mark.png'

let chartArray = [
  {
    title: 'EXPOSED FASTENER',
    standard: true,
    xtreme: false,
    order: 1,
  },
  {
    title: 'HIDDEN FASTENER',
    standard: false,
    xtreme: true,
    order: 2,
  },
  {
    title: 'DIRECT TO DECK INSTALL',
    standard: true,
    xtreme: true,
    order: 3,
  },
  {
    title: 'BATTEN INSTALL',
    standard: true,
    xtreme: false,
    order: 4,
  },
  
]

let tableRows = chartArray.map((row, index) => {
  let rowColor
  if (index % 2 === 0) {
    rowColor = `#676767`
  } else {
    rowColor = `none`
  }
  return (
    <tr key={`row${index}`}>
      <td
        sx={{
          borderLeft: `2px solid`,
          borderRight: `2px solid`,
          borderTop: `none`,
          borderBottom: `none`,
          borderColor: `text`,
          borderCollapse: `collapse`,
          backgroundColor: rowColor,
        }}
      >
        <p sx={{ color: `text` }}>{row.title}</p>
      </td>
      <td
        sx={{
          borderLeft: `2px solid`,
          borderRight: `2px solid`,
          borderTop: `none`,
          borderBottom: `none`,
          borderColor: `text`,
          borderCollapse: `collapse`,
          backgroundColor: rowColor,
        }}
      >
        {row.standard ? (
          <img
            src={checkMark}
            alt="Check mark"
            sx={{ verticalAlign: `middle` }}
          />
        ) : null}
      </td>
      <td
        sx={{
          borderLeft: `2px solid`,
          borderRight: `2px solid`,
          borderTop: `none`,
          borderBottom: `none`,
          borderColor: `text`,
          borderCollapse: `collapse`,
          backgroundColor: rowColor,
        }}
      >
        {row.xtreme ? (
          <img
            src={checkMark}
            alt="Check mark"
            sx={{ verticalAlign: `middle` }}
          />
        ) : null}
      </td>
    </tr>
  )
})

const comparisontable = () => {
  return (
    <table
      sx={{
        width: `100%`,
        border: `2px solid`,
        borderColor: `text`,
        borderCollapse: `collapse`,
        textAlign: `center`,
        margin: `5% 0`,
      }}
    >
      <thead>
        <tr>
          <th sx={{ bg: `text` }}></th>
          <th sx={{ bg: `text` }}>
            <Styled.h3
              sx={{
                color: 'primary',
                margin: `0`,
                padding: `0`,
                fontSize: ['2', '2', '2', '3', '3'],
              }}
            >
              HURRICANE METAL SHAKE
            </Styled.h3>
          </th>
          <th sx={{ bg: `text` }}>
            <Styled.h3
              sx={{
                color: 'primary',
                margin: `0`,
                padding: `0`,
                fontSize: ['2', '2', '2', '3', '3'],
              }}
            >
              HURRICANE METAL SHAKE PRO
            </Styled.h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          >
            <Styled.h3
              sx={{
                margin: `0`,
                padding: `0`,
                color: 'text',
                fontSize: ['2', '2', '2', '3', '3'],
              }}
            >
              KEY DIFFERENCES
            </Styled.h3>
          </td>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          ></td>
          <td
            sx={{
              borderLeft: `2px solid`,
              borderRight: `2px solid`,
              borderTop: `none`,
              borderBottom: `none`,
              borderColor: `text`,
              borderCollapse: `collapse`,
            }}
          ></td>
        </tr>
        {tableRows}
      </tbody>
    </table>
  )
}

export default comparisontable
