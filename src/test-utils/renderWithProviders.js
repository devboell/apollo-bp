import React from 'react'

import { render } from 'react-testing-library'
import { compose, apply } from 'ramda'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history' /* eslint-disable-line */
import { MockedProvider } from 'react-apollo/test-utils'
import { Provider } from 'react-redux'


const withRouter = ([node, options]) => {
  const history = createMemoryHistory({ initialEntries: [options.route] })
  return [
    <Router history={history}>{node}</Router>,
    { ...options, history },
  ]
}

const withApollo = ([node, options]) => [
  <MockedProvider
    removeTypename
    mocks={options.mocks}
  >
    {node}
  </MockedProvider>,
  options,
]

const withRedux = ([node, options]) => [
  <Provider store={options.store}>{node}</Provider>,
  options,
]

const withProvider = key => fn => ([node, options]) => (
  !options[key]
    ? [node, options]
    : fn([node, options])
)

const withProviders = compose(
  withProvider('route')(withRouter),
  withProvider('mocks')(withApollo),
  withProvider('store')(withRedux),
)

const renderWithProviders = (node, options) =>
  apply(render, withProviders([node, options]))

// re-export everything
export * from 'react-testing-library'

// override render method
export { renderWithProviders }
