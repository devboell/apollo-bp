import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'ramda'
import withLoading from 'components/Loading'
import withArtist from './enhancers'

export const GalleryData = ({ artist, children }) => (
  React.Children.only(React.cloneElement(children, { artist }))
)

GalleryData.propTypes = {
  artist: PropTypes.shape({
    path: PropTypes.string,
    paintings: PropTypes.array,
  }),
}

GalleryData.defaultProps = {
  artist: {},
}

export default compose(
  withArtist,
  withLoading,
)(GalleryData)
