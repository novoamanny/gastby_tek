/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

let tableRowsUL2218 = [
  {
    impact: 1,
    area: 'Top left seam where overlap occurs',
    depression: `0.125"`,
    observation: `No visible evidence of tearing, cracking, fracturing, splitting, rupture, crazing, or other evidence of opening in the prepared roof covering layer.`,
    results: `PASS`,
  },
  {
    impact: 2,
    area: 'Top left seam where overlap occurs',
    depression: `+0.125"`,
    observation: `No visible evidence of tearing, cracking, fracturing, splitting, rupture, crazing, or other evidence of opening in the prepared roof covering layer.`,
    results: `PASS`,
  },
  {
    impact: 3,
    area: 'Center Seam',
    depression: `0.125"`,
    observation: `No visible evidence of tearing, cracking, fracturing, splitting, rupture, crazing, or other evidence of opening in the prepared roof covering layer.`,
    results: `PASS`,
  },
  {
    impact: 4,
    area: 'Center Seam',
    depression: `+0.125"`,
    observation: `No visible evidence of tearing, cracking, fracturing, splitting, rupture, crazing, or other evidence of opening in the prepared roof covering layer.`,
    results: `PASS`,
  },
  {
    impact: 5,
    area: 'Bottom left seam',
    depression: `0.125"`,
    observation: `No visible evidence of tearing, cracking, fracturing, splitting, rupture, crazing, or other evidence of opening in the prepared roof covering layer.`,
    results: `PASS`,
  },
  {
    impact: 6,
    area: 'Bottom left seam',
    depression: `+0.125"`,
    observation: `No visible evidence of tearing, cracking, fracturing, splitting, rupture, crazing, or other evidence of opening in the prepared roof covering layer.`,
    results: `PASS`,
  },
  {
    impact: 7,
    area: 'Top center seam',
    depression: `0.125"`,
    observation: `No visible evidence of tearing, cracking, fracturing, splitting, rupture, crazing, or other evidence of opening in the prepared roof covering layer.`,
    results: `PASS`,
  },
  {
    impact: 8,
    area: 'Top center seam',
    depression: `+0.125"`,
    observation: `No visible evidence of tearing, cracking, fracturing, splitting, rupture, crazing, or other evidence of opening in the prepared roof covering layer.`,
    results: `PASS`,
  },
  {
    impact: 9,
    area: 'Center panel',
    depression: `0.125"`,
    observation: `No visible evidence of tearing, cracking, fracturing, splitting, rupture, crazing, or other evidence of opening in the prepared roof covering layer.`,
    results: `PASS`,
  },
  {
    impact: 10,
    area: 'Center panel',
    depression: `+0.125"`,
    observation: `No visible evidence of tearing, cracking, fracturing, splitting, rupture, crazing, or other evidence of opening in the prepared roof covering layer.`,
    results: `PASS`,
  },
  {
    impact: 11,
    area: 'Bottom right corner panel',
    depression: `0.125"`,
    observation: `No visible evidence of tearing, cracking, fracturing, splitting, rupture, crazing, or other evidence of opening in the prepared roof covering layer.`,
    results: `PASS`,
  },
  {
    impact: 12,
    area: 'Bottom right corner panel',
    depression: `+0.125"`,
    observation: `No visible evidence of tearing, cracking, fracturing, splitting, rupture, crazing, or other evidence of opening in the prepared roof covering layer.`,
    results: `PASS`,
  },
]

let UL2218table = tableRowsUL2218.map((row, index) => {
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
    <tr key={`TR${index}`}>
      <TdSection>{row.impact}</TdSection>
      <TdSection>{row.area}</TdSection>
      <TdSection>{row.depression}</TdSection>
      <TdSection>{row.observation}</TdSection>
      <TdSection>{row.results}</TdSection>
    </tr>
  )
})

const ul2218results = () => {
  return (
    <div sx={{ overflowX: `auto` }}>
      <Styled.h2>HURRICANE® Metal Shake UL 2218 Testing Results</Styled.h2>
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
                IMPACT #
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
                IMPACT AREA
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
                DEPRESSION DEPTH
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
                OBSERVATIONS
              </Styled.h3>
            </th>
            <th sx={{ bg: `text`, padding: `1%` }}>
              <Styled.h3
                sx={{
                  color: 'primary',
                  margin: `0`,
                  padding: `0`,
                  fontSize: ['2', '2', '2', '3', '3'],
                }}
              >
                RESULTS
              </Styled.h3>
            </th>
          </tr>
        </thead>
        <tbody>{UL2218table}</tbody>
      </table>
    </div>
  )
}

export default ul2218results
