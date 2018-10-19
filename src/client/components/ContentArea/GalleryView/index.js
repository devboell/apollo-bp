import React from 'react'
import PropTypes from 'prop-types'
import { compose, uniq, pluck } from 'ramda'

import GenreChooser from '../GenreChooser'
import GalleryThumbs from '../GalleryThumbs'

const artistGenres =
  compose(
    uniq,
    pluck('genre'),
  )

export class GalleryView extends React.Component {
  componentDidMount() {
    const { artist, onSetSelectedGenres } = this.props
    if (artist) {
      onSetSelectedGenres(artistGenres(artist.paintings))
    }
  }

  componentDidUpdate(prevProps) {
    const { artist, onSetSelectedGenres } = this.props
    if (prevProps.artist !== artist) {
      onSetSelectedGenres(artistGenres(artist.paintings))
    }
  }

  render() {
    const {
      artist,
      selectedGenres,
      onSelectGenre,
      onDeselectGenre,
    } = this.props

    const genreFilter = painting => selectedGenres.includes(painting.genre)

    return (
      <div>
        <GenreChooser
          genres={artistGenres(artist.paintings)}
          {...{
            selectedGenres,
            onSelectGenre,
            onDeselectGenre,
          }}
        />
        <GalleryThumbs
          artistPath={artist.path}
          paintings={artist.paintings.filter(genreFilter)}
        />
      </div>
    )
  }
}

GalleryView.propTypes = {
  artist: PropTypes.shape({
    path: PropTypes.string,
    paintings: PropTypes.array,
  }),
  selectedGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSetSelectedGenres: PropTypes.func.isRequired,
  onSelectGenre: PropTypes.func.isRequired,
  onDeselectGenre: PropTypes.func.isRequired,
}

GalleryView.defaultProps = {
  artist: {},
}

export default GalleryView

