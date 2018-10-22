import React from 'react'
import 'react-testing-library/cleanup-after-each'
import { createStore } from 'redux'
import {
  renderWithProviders,
  wait,
  fireEvent,
  within,
} from 'test-utils/renderWithProviders'
import rootReducer from 'client/reducers'
import App from '../index'
import { mocks } from '../mocks'

let getByTestId
let queryByText


beforeEach(async () => {
  const providerConfig = {
    route: '/',
    mocks,
    store: createStore(rootReducer),
  };

  ({
    getByTestId,
    queryByText,
  } = renderWithProviders(<App />, providerConfig))

  await wait(() =>
    expect(queryByText(/loading\.\.\./i)).not.toBeInTheDocument())
})

it('selects a nav item, and shows galleryView', async () => {
  fireEvent.click(queryByText('Heroshige'))
  await wait(() =>
    expect(queryByText(/loading\.\.\./i)).not.toBeInTheDocument())

  const content = within(getByTestId('content'))
  expect(content.queryByTestId('home')).not.toBeInTheDocument()
  expect(content.getByTestId('galleryView')).toBeInTheDocument()
})
