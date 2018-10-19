import { graphql } from 'react-apollo'
import ARTISTS_QUERY from 'graphql/ArtistsQuery'


export default graphql(
  ARTISTS_QUERY,
  {
    props: ({ data: { artists, loading, error } }) => ({
      artists,
      loading,
      error,
    }),
  },
)
