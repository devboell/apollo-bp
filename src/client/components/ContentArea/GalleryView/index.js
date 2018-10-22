import React from 'react'
import PropTypes from 'prop-types'
import { compose, uniq, pluck } from 'ramda'

import GenreChooser from '../GenreChooser'
import GalleryThumbs from '../GalleryThumbs'
import Wrapper from './Wrapper'

const artistGenres =
  compose(
    uniq,
    pluck('genre'),
  )

export class GalleryView extends React.Component {
  componentDidMount() {
    const {
      artist,
      selectedGenres,
      onSetSelectedGenres,
    } = this.props
    if (selectedGenres.length === 0) {
      onSetSelectedGenres(artist.path, artistGenres(artist.paintings))
    }
  }

  render() {
    const {
      artist: {
        path,
        paintings,
      },
      selectedGenres,
      onSelectGenre,
      onDeselectGenre,
    } = this.props

    const genreFilter = painting => selectedGenres.includes(painting.genre)

    return (
      <Wrapper>
        <GenreChooser
          genres={artistGenres(paintings)}
          selectedGenres={selectedGenres}
          onSelectGenre={onSelectGenre(path)}
          onDeselectGenre={onDeselectGenre(path)}
        />
        <GalleryThumbs
          artistPath={path}
          paintings={paintings.filter(genreFilter)}
        />
      </Wrapper>
    )
  }
}

GalleryView.propTypes = {
  artist: PropTypes.shape({
    path: PropTypes.string,
    paintings: PropTypes.array,
  }),
  selectedGenres: PropTypes.arrayOf(PropTypes.string),
  onSetSelectedGenres: PropTypes.func.isRequired,
  onSelectGenre: PropTypes.func.isRequired,
  onDeselectGenre: PropTypes.func.isRequired,
}

GalleryView.defaultProps = {
  artist: {},
  selectedGenres: [],
}

export default GalleryView

