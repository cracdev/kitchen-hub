import React, { Component } from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import IndexComponent from '../IndexComponent'
import RecipePageComponent from '../RecipePageComponent'
import EditPageComponent from '../EditPageComponent'
import NoMatchComponent from '../NoMatchComponent'
import style from './Routes.scss'

class Routes extends Component {
    constructor(props) {
        super(props)
    }
    null
    render() {
        return (
        <main className="Routes">
          <Switch>
            <Redirect exact path="/" to="/page/1"/>
            <Route exact path="/page/:pageNumber" component={IndexComponent}/>
            <Route exact path="/tags/:tag" component={IndexComponent}/>
            <Route exact path="/recipe/:recipe" component={RecipePageComponent}/>
            <Route exact path="/edit/:recipe" component={EditPageComponent}/>
            <Route component={NoMatchComponent} />          
          </Switch>
        </main>
        );
    }
}

export default Routes
