import React from 'react'

import { render } from 'react-testing-library'
import { compose } from 'ramda'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history' /* eslint-disable-line */
import { MockedProvider } from 'react-apollo/test-utils'
import { Provider } from 'react-redux'


const withRouter = ([node, config]) => {
  const history = createMemoryHistory({ initialEntries: [config.route] })
  return [
    <Router history={history}>{node}</Router>,
    { ...config, history },
  ]
}

const withApollo = ([node, config]) => [
  <MockedProvider
    removeTypename
    mocks={config.mocks}
  >
    {node}
  </MockedProvider>,
  config,
]

const withRedux = ([node, config]) => [
  <Provider store={config.store}>{node}</Provider>,
  config,
]

const withProvider = key => fn => ([node, config]) => (
  !config[key]
    ? [node, config]
    : fn([node, config])
)

const withProviders = compose(
  withProvider('route')(withRouter),
  withProvider('mocks')(withApollo),
  withProvider('store')(withRedux),
)

const renderWithProviders = (node, config) => {
  const [WithProviders, { history }] = withProviders([node, config])
  return {
    ...render(WithProviders),
    history,
  }
}


// re-export everything
export * from 'react-testing-library'

// override render method
export { renderWithProviders }
