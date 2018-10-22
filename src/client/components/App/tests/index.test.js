import React from 'react'
import 'react-testing-library/cleanup-after-each'
import { createStore } from 'redux'
import { renderWithProviders, wait, within } from 'test-utils/renderWithProviders'
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

it('gets all grid items', async () => {
  expect(getByTestId('homeIcon')).toBeInTheDocument()
  expect(getByTestId('header')).toBeInTheDocument()
  expect(getByTestId('artistNav')).toBeInTheDocument()
  expect(getByTestId('content')).toBeInTheDocument()
})

it('gets 4 nav items in artistNav', async () => {
  const artistNav = within(getByTestId('artistNav'))
  expect(artistNav.getByText('Heroshige')).toBeInTheDocument()
  expect(artistNav.getByText('Hokusai')).toBeInTheDocument()
  expect(artistNav.getByText('Kuniyoshi')).toBeInTheDocument()
  expect(artistNav.getByText('Kunisada')).toBeInTheDocument()
})

it('gets the home content and NOT gallery content ', () => {
  const content = within(getByTestId('content'))
  expect(content.getByTestId('home')).toBeInTheDocument()
  expect(content.queryByTestId('galleryView')).not.toBeInTheDocument()
})
