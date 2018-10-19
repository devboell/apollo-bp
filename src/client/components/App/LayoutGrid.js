import styled from 'styled-components'

const LayoutGrid = styled.main`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr 10fr;
  grid-template-areas:
     "homeIcon header"
     "artistNav artistNav"
     "content content"
`

export default LayoutGrid
