import React from 'react'
import 'react-testing-library/cleanup-after-each'
import { createStore } from 'redux'
import { renderWithProviders, wait, fireEvent } from 'test-utils/renderWithProviders'
import rootReducer from 'client/reducers'
import App from '../index'
import { mocks } from '../mocks'

it('should ', async () => {
  const providerConfig = {
    route: '/',
    mocks,
    store: createStore(rootReducer),
  }

  const {
    getByAltText,
    queryByText,
    debug,
  } = renderWithProviders(<App />, providerConfig)
  await wait(() =>
    expect(queryByText(/loading\.\.\./i)).not.toBeInTheDocument())

  expect(getByAltText('Home')).toBeInTheDocument()
  expect(queryByText('Heroshige')).toBeInTheDocument()

  fireEvent.click(queryByText('Heroshige'))
  await wait(() =>
    expect(queryByText(/loading\.\.\./i)).not.toBeInTheDocument())
  debug()
})
