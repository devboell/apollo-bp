import gql from 'graphql-tag'

export default gql`
  query ArtistByPathQuery($path: String) {
    artistByPath(path: $path) {
      path
      paintings {
        title
        name
        genre
      }
    }
  }
`
