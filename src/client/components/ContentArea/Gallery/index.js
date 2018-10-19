import React from 'react'
import PropTypes from 'prop-types'

import GalleryData from 'containers/GalleryData'
import GenreContainer from 'containers/GenreContainer'

const Gallery = ({ match }) =>
  <GalleryData {...{ match }}>
    <GenreContainer />
  </GalleryData>

Gallery.propTypes = {
  match: PropTypes.shape({}).isRequired,
}

export default Gallery
