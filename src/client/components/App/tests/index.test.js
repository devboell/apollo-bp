import React from 'react'
import 'react-testing-library/cleanup-after-each'
import { renderWithProviders, wait } from 'test-utils/renderWithProviders'
import App from '../index'
import { mocks } from '../mocks'

it('should ', async () => {
  const providerConfig = {
    route: '/heroshige',
    mocks,
  }

  const {
    getByAltText,
    queryByText,
    debug,
  } = renderWithProviders(<App />, providerConfig)
  await wait(() =>
    expect(queryByText(/loading\.\.\./i)).not.toBeInTheDocument())

  debug()
  expect(getByAltText('Home')).toBeInTheDocument()
})
