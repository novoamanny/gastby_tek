/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

let tableRowsASTME1592 = [
  {
    pressure: `-10 PSF`,
    inch1: `0.1`,
    inch2: `0.1`,
    inch3: `0.11`,
    inch4: `0.02`,
    inch5: `0.01`,
    inch6: `0.01`,
  },
  {
    pressure: `-20 PSF`,
    inch1: `0.18`,
    inch2: `0.18`,
    inch3: `0.19`,
    inch4: `0.04`,
    inch5: `0.04`,
    inch6: `0.04`,
  },
  {
    pressure: `-30 PSF`,
    inch1: `0.29`,
    inch2: `0.3`,
    inch3: `0.3`,
    inch4: `0.06`,
    inch5: `0.07`,
    inch6: `0.06`,
  },
  {
    pressure: `-40 PSF`,
    inch1: `0.41`,
    inch2: `0.43`,
    inch3: `0.42`,
    inch4: `0.08`,
    inch5: `0.09`,
    inch6: `0.08`,
  },
  {
    pressure: `-50 PSF`,
    inch1: `0.54`,
    inch2: `0.54`,
    inch3: `0.54`,
    inch4: `0.11`,
    inch5: `0.11`,
    inch6: `0.1`,
  },
  {
    pressure: `-60 PSF`,
    inch1: `0.65`,
    inch2: `0.65`,
    inch3: `0.66`,
    inch4: `0.12`,
    inch5: `0.13`,
    inch6: `0.12`,
  },
  {
    pressure: `-70 PSF`,
    inch1: `0.77`,
    inch2: `0.76`,
    inch3: `0.78`,
    inch4: `0.15`,
    inch5: `0.14`,
    inch6: `0.15`,
  },
  {
    pressure: `-80 PSF`,
    inch1: `0.89`,
    inch2: `0.87`,
    inch3: `0.91`,
    inch4: `0.15`,
    inch5: `0.17`,
    inch6: `0.16`,
  },
  {
    pressure: `-90 PSF`,
    inch1: `1.01`,
    inch2: `0.98`,
    inch3: `1.05`,
    inch4: `0.16`,
    inch5: `0.18`,
    inch6: `0.17`,
  },
  {
    pressure: `-100 PSF`,
    inch1: `1.16`,
    inch2: `1.12`,
    inch3: `1.2`,
    inch4: `0.18`,
    inch5: `0.19`,
    inch6: `0.18`,
  },
  {
    pressure: `-110 PSF`,
    inch1: `1.23`,
    inch2: `1.19`,
    inch3: `1.27`,
    inch4: `0.21`,
    inch5: `0.2`,
    inch6: `0.21`,
  },
]

let E1592table = tableRowsASTME1592.map((row, index) => {
  let rowColor
  if (index % 2 === 0) {
    rowColor = `#fdf4f1`
  } else {
    rowColor = `fff`
  }

  let TdSection = ({ children }) => (
    <td
      sx={{
        borderLeft: `2px solid`,
        borderRight: `2px solid`,
        borderTop: `2px solid`,
        borderBottom: `none`,
        borderColor: `primary`,
        borderCollapse: `collapse`,
        backgroundColor: rowColor,
        color: `secondary`,
      }}
    >
      <p sx={{ padding: `2%`, fontWeight: `bold`, color: `secondary` }}>
        {children}
      </p>
    </td>
  )
  return (
    <tr key={`TDSection${index}`}>
      <TdSection>{row.pressure}</TdSection>
      <TdSection>{row.inch1}</TdSection>
      <TdSection>{row.inch2}</TdSection>
      <TdSection>{row.inch3}</TdSection>
      <TdSection>{row.inch4}</TdSection>
      <TdSection>{row.inch5}</TdSection>
      <TdSection>{row.inch6}</TdSection>
    </tr>
  )
})

const E1592results = () => {
  return (
    <div sx={{ overflowX: `auto` }}>
      <Styled.h2>HURRICANE® Metal Shake ASTM E1592 Testing Results</Styled.h2>
      <table
        sx={{
          width: `100%`,
          border: `2px solid`,
          borderColor: `primary`,
          borderCollapse: `collapse`,
          textAlign: `center`,
          margin: `5% 0`,
        }}
      >
        <thead>
          <tr>
            <th
              sx={{
                bg: `text`,
                border: `2px solid`,
                borderColor: `primary`,
                padding: `1%`,
              }}
            >
              <Styled.h3
                sx={{
                  color: 'primary',
                  margin: `0`,
                  padding: `0`,
                  fontSize: ['2', '2', '2', '3', '3'],
                }}
              >
                ASTM E1592-12
              </Styled.h3>
            </th>
            <th
              colSpan="6"
              sx={{
                bg: `text`,
                border: `2px 0 solid`,
                borderColor: `primary`,
                padding: `1%`,
              }}
            >
              <Styled.h3
                sx={{
                  color: 'primary',
                  margin: `0`,
                  padding: `0`,
                  fontSize: ['2', '2', '2', '3', '3'],
                }}
              >
                INDICATOR (INCHES)
              </Styled.h3>
            </th>
          </tr>
          <tr>
            <th
              sx={{
                bg: `text`,
                border: `2px solid`,
                borderColor: `primary`,
                backgroundColor: `primary`,
                padding: `1%`,
              }}
            >
              <Styled.h3
                sx={{
                  color: 'primary',
                  margin: `0`,
                  padding: `0`,
                  fontSize: ['2', '2', '2', '3', '3'],
                }}
              ></Styled.h3>
            </th>
            <th
              colSpan="3"
              sx={{
                bg: `text`,
                border: `2px solid`,
                borderColor: `primary`,
                backgroundColor: `primary`,
                padding: `1%`,
              }}
            >
              <Styled.h3
                sx={{
                  color: 'text',
                  margin: `0`,
                  padding: `0`,
                  fontSize: ['2', '2', '2', '3', '3'],
                }}
              >
                DEFLECTION
              </Styled.h3>
            </th>
            <th
              colSpan="3"
              sx={{
                bg: `text`,
                border: `2px solid`,
                borderColor: `primary`,
                backgroundColor: `primary`,
                padding: `1%`,
              }}
            >
              <Styled.h3
                sx={{
                  color: 'text',
                  margin: `0`,
                  padding: `0`,
                  fontSize: ['2', '2', '2', '3', '3'],
                }}
              >
                PERMANENT SET
              </Styled.h3>
            </th>
          </tr>
          <tr>
            <th
              sx={{
                bg: `text`,
                borderRight: `2px solid`,
                borderRight: `2px solid`,
                borderColor: `primary`,
                padding: `1%`,
              }}
            >
              <Styled.h3
                sx={{
                  color: 'primary',
                  margin: `0`,
                  padding: `0`,
                  fontSize: ['2', '2', '2', '3', '3'],
                }}
              >
                UPLIFT PRESSURE
              </Styled.h3>
            </th>
            <th
              sx={{
                bg: `text`,
                borderRight: `2px solid`,
                borderColor: `primary`,
                padding: `1%`,
              }}
            >
              <Styled.h3
                sx={{
                  color: 'primary',
                  margin: `0`,
                  padding: `0`,
                  fontSize: ['2', '2', '2', '3', '3'],
                }}
              >
                1
              </Styled.h3>
            </th>
            <th
              sx={{
                bg: `text`,
                borderRight: `2px solid`,
                borderColor: `primary`,
                padding: `1%`,
              }}
            >
              <Styled.h3
                sx={{
                  color: 'primary',
                  margin: `0`,
                  padding: `0`,
                  fontSize: ['2', '2', '2', '3', '3'],
                }}
              >
                2
              </Styled.h3>
            </th>
            <th
              sx={{
                bg: `text`,
                borderRight: `2px solid`,
                borderColor: `primary`,
                padding: `1%`,
              }}
            >
              <Styled.h3
                sx={{
                  color: 'primary',
                  margin: `0`,
                  padding: `0`,
                  fontSize: ['2', '2', '2', '3', '3'],
                }}
              >
                3
              </Styled.h3>
            </th>
            <th
              sx={{
                bg: `text`,
                borderRight: `2px solid`,
                borderColor: `primary`,
                padding: `1%`,
              }}
            >
              <Styled.h3
                sx={{
                  color: 'primary',
                  margin: `0`,
                  padding: `0`,
                  fontSize: ['2', '2', '2', '3', '3'],
                }}
              >
                1
              </Styled.h3>
            </th>
            <th
              sx={{
                bg: `text`,
                borderRight: `2px solid`,
                borderColor: `primary`,
                padding: `1%`,
              }}
            >
              <Styled.h3
                sx={{
                  color: 'primary',
                  margin: `0`,
                  padding: `0`,
                  fontSize: ['2', '2', '2', '3', '3'],
                }}
              >
                2
              </Styled.h3>
            </th>
            <th
              sx={{
                bg: `text`,
                borderRight: `2px solid`,
                borderColor: `primary`,
                padding: `1%`,
              }}
            >
              <Styled.h3
                sx={{
                  color: 'primary',
                  margin: `0`,
                  padding: `0`,
                  fontSize: ['2', '2', '2', '3', '3'],
                }}
              >
                3
              </Styled.h3>
            </th>
          </tr>
        </thead>
        <tbody>{E1592table}</tbody>
      </table>
    </div>
  )
}

export default E1592results
