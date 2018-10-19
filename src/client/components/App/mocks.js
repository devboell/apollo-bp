
import ARTISTS_QUERY from 'graphql/ArtistsQuery'
import artistsFixt from 'fixtures/artistsQuery'

export const artists = {
  request: { query: ARTISTS_QUERY },
  result: { data: { artists: artistsFixt } },
}

export const mocks = [
  artists,
]
