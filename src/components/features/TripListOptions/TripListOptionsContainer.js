import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase} from '../../../redux/filtersRedux';
import {addTags, removeTags, changeDurations} from '../../../redux/filtersRedux'

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  addTags: tag => dispatch(addTags(tag)),
  removeTags: tag => dispatch(removeTags(tag)),
  changeDurations: (type, duration) => dispatch(changeDurations({type, duration})),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
