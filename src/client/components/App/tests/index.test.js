import React from 'react'
import 'react-testing-library/cleanup-after-each'
import { render } from 'react-testing-library'
import {Link, Route, Router, Switch} from 'react-router-dom'
import {createMemoryHistory} from 'history'

function renderWithRouter(
  ui,
  {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

import App from '../index'
it('should ', () => {
  const {
    getByText,
    getByTestId,
    container,
    asFragment,
    getByAltText,
    debug,
  } = renderWithRouter(
    <App />,
  )
  
  // console.log('getByAltText', getByAltText('Home'))
  // console.log('getByTestId', getByTestId)
  // console.log('container', container)
  // console.log('asFragment', asFragment)
  // debug()

  expect(getByAltText('Home')).toBeInTheDocument()
})
