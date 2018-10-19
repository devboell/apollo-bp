import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'ramda'
import withLoading from 'components/Loading'
import withArtists from './enhancers'

export const ArtistNavData = ({ artists, children }) => (
  React.Children.only(React.cloneElement(children, { artists }))
)

ArtistNavData.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  })),
  children: PropTypes.node.isRequired,
}

ArtistNavData.defaultProps = {
  artists: [],
}


export default compose(
  withArtists,
  withLoading,
)(ArtistNavData)
