import gql from 'graphql-tag'

export default gql`
  query ArtistsQuery {
    artists {
      name
      path
    }
  }
`
