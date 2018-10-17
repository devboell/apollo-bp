import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


export const ArtistNavData = ({ artists, loading, children }) => (
  loading
    ? <div>loading...</div>
    : React.Children.only(React.cloneElement(children, { artists }))

)

// workaround for istanbul quirk, related to: https://github.com/facebook/jest/issues/1824
ArtistNavData.displayName = 'ArtistNavData'

ArtistNavData.propTypes = {
  loading: PropTypes.bool.isRequired,
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  })),
  children: PropTypes.node.isRequired,
}

ArtistNavData.defaultProps = {
  artists: [],
}

export const ARTISTS_QUERY = gql`
  query ArtistsQuery {
    artists {
      name
      path
    }
  }
`

export const withArtists = graphql(
  ARTISTS_QUERY,
  {
    props: ({ data: { artists, loading } }) => ({
      artists,
      loading,
    }),
  },
)


export default withArtists(ArtistNavData)
