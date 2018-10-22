import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Thumb from './Thumb'

const ThumbLink = ({ artistPath, paintingName, paintingTitle }) => (
  <Link
    to={`/${artistPath}/${paintingName}`}
  >
    <Thumb
      src={`images/artists/${artistPath}/thumb.${paintingName}`}
      alt={paintingTitle}
    />
  </Link>
)

ThumbLink.propTypes = {
  artistPath: PropTypes.string.isRequired,
  paintingName: PropTypes.string.isRequired,
  paintingTitle: PropTypes.string.isRequired,
}


export default ThumbLink
