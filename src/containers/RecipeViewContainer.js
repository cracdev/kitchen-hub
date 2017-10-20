import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipeViewComponent from '../components/partials/RecipeViewComponent';
import * as recipeActions from '../actions/recipeActions';

function mapStateToProps(state) {
  return {
    id: state.recipeReducer.id,
    title: state.recipeReducer.title,
    description: state.recipeReducer.description,
    imgSrc: state.recipeReducer.imgSrc,
    timeStamp: state.recipeReducer.timeStamp
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(recipeActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeViewComponent);