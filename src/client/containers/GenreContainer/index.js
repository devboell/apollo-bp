import { connect } from 'react-redux'

import GalleryView from 'components/ContentArea/GalleryView'
import { setSelectedGenres, selectGenre, deselectGenre } from './actions'

export const mapStateToProps = (state, ownProps) => ({
  selectedGenres: state.gallery.artistGenres[ownProps.artist.path],
})

export const mapDispatchToProps = dispatch => ({
  onSetSelectedGenres: (name, genres) => dispatch(setSelectedGenres(name, genres)),
  onSelectGenre: name => genre => dispatch(selectGenre(name, genre)),
  onDeselectGenre: name => genre => dispatch(deselectGenre(name, genre)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GalleryView)
