import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import styles from './IndexComponent.css'
import HeaderComponent from '../HeaderComponent'
import RecipeListComponent from '../RecipeListComponent'
import PushURLComponent from '../PushURLComponent'
import * as domainActions from '../../actions/domainActions'
import endpoint from '../../utils/endpoint';

class IndexComponent extends Component {
    constructor(props) {
      super(props)
    }
    componentWillMount(){
    }
    componentDidMount(){
      this.props.fetchRecipes(endpoint) 
    }
    handleRefreshRecipesList(event){}
    null
    render() {
        // return full list unless filtering is turned on
        let recipes = !!this.props.filtering ? this.props.filteredRecipes : this.props.recipes;
        return (
            <div className="IndexComponent">
              <HeaderComponent />
              <div className="section">
                <PushURLComponent />
                <RecipeListComponent recipes={recipes}/>
              </div>
            </div>
        );
    }
}

IndexComponent.propTypes = {}

IndexComponent.defaultProps = {}

// export default IndexComponent

function mapStateToProps(state) {
  return {
    recipes: state.domainReducer.recipes, 
    filtering: state.domainReducer.filtering,
    filteredRecipes: state.domainReducer.filteredRecipes,
    timeStamp: state.domainReducer.timeStamp,
    fetchRecipes: domainActions.fetchRecipes,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...domainActions
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(IndexComponent);

