import React from 'react'
import 'react-testing-library/cleanup-after-each'
import { renderWithProviders, wait } from 'test-utils/renderWithProviders'
import App from '../index'
import { mocks } from '../mocks'

it('should ', async () => {
  const renderOptions = {
    route: '/',
    mocks,
  }

  const {
    getByAltText,
    queryByText,
  } = renderWithProviders(<App />, renderOptions)
  await wait(() =>
    expect(queryByText(/loading\.\.\./i)).not.toBeInTheDocument())

  expect(getByAltText('Home')).toBeInTheDocument()
})
