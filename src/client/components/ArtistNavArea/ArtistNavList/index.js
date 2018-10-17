import React from 'react'
import PropTypes from 'prop-types'

import ArtistNavItem from '../ArtistNavItem'
import Ul from './Ul'

const ArtistNavList = ({ artists }) => (
  <Ul>
    {artists.map(artist => (
      <ArtistNavItem
        key={`artist-${artist.path}`}
        name={artist.name}
        path={artist.path}
      />
    ))}
  </Ul>
)

ArtistNavList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  })),
}

ArtistNavList.defaultProps = {
  artists: [],
}

export default ArtistNavList
