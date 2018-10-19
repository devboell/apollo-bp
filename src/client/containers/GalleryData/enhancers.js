import { graphql } from 'react-apollo'
import ARTIST_BY_PATH_QUERY from 'graphql/ArtistByPathQuery'


export default graphql(
  ARTIST_BY_PATH_QUERY,
  {
    options: ({ match }) => ({ variables: { path: match.params.artistPath } }),
    props: ({ data: { artistByPath, loading, error } }) => ({
      artist: artistByPath,
      loading,
      error,
    }),
  },
)
