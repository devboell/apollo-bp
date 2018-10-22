
import ARTISTS_QUERY from 'graphql/ArtistsQuery'
import artistsFixt from 'fixtures/artistsQuery'

import ARTIST_BY_PATH_QUERY from 'graphql/ArtistByPathQuery'
import artistByPathFixt from 'fixtures/artistByPathQuery'

export const artists = {
  request: { query: ARTISTS_QUERY },
  result: { data: { artists: artistsFixt } },
}

export const artistByPath = {
  request: { query: ARTIST_BY_PATH_QUERY, variables: { path: 'heroshige' } },
  result: { data: { artistByPath: artistByPathFixt } },
}

export const mocks = [
  artists,
  artistByPath,
]
