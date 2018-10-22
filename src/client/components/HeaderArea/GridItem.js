import styled from 'styled-components'

const GridItem = styled.header.attrs({
  'data-testid': 'header',
})`
  grid-area: header;
  display: flex;
  vertical-align: center;
  padding: 10px 0px 20px 30px;
`

export default GridItem
