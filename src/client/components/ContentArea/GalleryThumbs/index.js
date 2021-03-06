import React from 'react'
import { PropTypes } from 'prop-types'

import GalleryItem from './GalleryItem'
import Wrapper from './Wrapper'


export const GalleryThumbs = ({ paintings, artistPath }) =>
  <Wrapper>
    {paintings.map(painting =>
      <GalleryItem
        key={`painting-${painting.name}`}
        artistPath={artistPath}
        {...{ painting }}
      />)}
  </Wrapper>

GalleryThumbs.propTypes = {
  paintings: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
  artistPath: PropTypes.string.isRequired,
}

export default GalleryThumbs
