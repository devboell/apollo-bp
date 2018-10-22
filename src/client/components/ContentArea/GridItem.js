import styled from 'styled-components'

const GridItem = styled.main.attrs({
  'data-testid': 'content',
})`
  grid-area: content;
`

export default GridItem
