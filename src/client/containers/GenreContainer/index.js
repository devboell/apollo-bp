import { connect } from 'react-redux'

import GalleryView from 'components/ContentArea/GalleryView'
import { setSelectedGenres, selectGenre, deselectGenre } from './actions'

export const mapStateToProps = state => ({
  selectedGenres: state.gallery.selectedGenres,
})

export const mapDispatchToProps = dispatch => ({
  onSetSelectedGenres: genres => dispatch(setSelectedGenres(genres)),
  onSelectGenre: genre => dispatch(selectGenre(genre)),
  onDeselectGenre: genre => dispatch(deselectGenre(genre)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GalleryView)
