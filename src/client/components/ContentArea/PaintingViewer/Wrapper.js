import styled from 'styled-components'

const Wrapper = styled.div.attrs({
  'data-testid': 'paintingViewer',
})`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  width: 100%;
  margin: auto;
`

export default Wrapper
