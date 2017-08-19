import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeComponent from '../components/HomeComponent';
import { fetchRecipes, receiveRecipes } from '../actions/recipeActions';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...fetchRecipes,
    ...receiveRecipes
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);