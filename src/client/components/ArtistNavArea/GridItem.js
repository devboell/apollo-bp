import styled from 'styled-components'

const GridItem = styled.nav.attrs({
  'data-testid': 'artistNav',
})`
  grid-area: artistNav;
`

export default GridItem
