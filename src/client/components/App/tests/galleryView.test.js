import React from 'react'
import 'react-testing-library/cleanup-after-each'
import { createStore } from 'redux'
import { renderWithProviders, wait, within, fireEvent } from 'test-utils/renderWithProviders'
import rootReducer from 'client/reducers'
import artistByPathFixt from 'fixtures/artistByPathQuery'
import App from '../index'
import { mocks } from '../mocks'

const paintingToSelect = artistByPathFixt.paintings[0]

let getByTestId
let queryByText
let queryByTestId
let history

beforeEach(async () => {
  const providerConfig = {
    route: '/heroshige',
    mocks,
    store: createStore(rootReducer),
  };

  ({
    getByTestId,
    queryByText,
    queryByTestId,
    history,
  } = renderWithProviders(<App />, providerConfig))

  await wait(() =>
    expect(queryByText(/loading\.\.\./i)).not.toBeInTheDocument())
})

it('shows painting thumbs for artist path ', () => {
  const galleryView = within(getByTestId('galleryView'))
  artistByPathFixt.paintings.forEach((p) => {
    expect(galleryView.getByAltText(p.title)).toBeInTheDocument()
  })
})

it('selects a thumb and shows paintingViewer', () => {
  const galleryView = within(getByTestId('galleryView'))
  fireEvent.click(galleryView.getByAltText(paintingToSelect.title))

  expect(queryByTestId('galleryView')).not.toBeInTheDocument()
  expect(getByTestId('paintingViewer')).toBeInTheDocument()
})

it('selects a thumb and changes location path', () => {
  const galleryView = within(getByTestId('galleryView'))
  fireEvent.click(galleryView.getByAltText(paintingToSelect.title))
  const paintingPath = `/${artistByPathFixt.path}/${paintingToSelect.name}`
  expect(history.location.pathname).toBe(paintingPath)
})
