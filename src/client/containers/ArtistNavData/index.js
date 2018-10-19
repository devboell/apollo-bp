import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'ramda'
import { graphql } from 'react-apollo'
import withLoading from 'components//Loading'
import ARTISTS_QUERY from 'graphql/ArtistsQuery'

export const ArtistNavData = ({ artists, children }) => (
  React.Children.only(React.cloneElement(children, { artists }))

)

// workaround for istanbul quirk, related to: https://github.com/facebook/jest/issues/1824
ArtistNavData.displayName = 'ArtistNavData'

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

export const withArtists = graphql(
  ARTISTS_QUERY,
  {
    props: ({ data: { artists, loading, error } }) => ({
      artists,
      loading,
      error,
    }),
  },
)


export default compose(
  withArtists,
  withLoading,
)(ArtistNavData)
