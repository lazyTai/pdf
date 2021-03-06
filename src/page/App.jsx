import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../actions.js'
import {withRouter} from 'react-router-dom'

import {Button, Grid, Icon} from 'semantic-ui-react'
import _ from 'lodash'
import AppBottom from "./component/app.bottom.jsx"
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {CSSTransitionGroup} from 'react-transition-group'
import {animationName} from "../myConst.js"
import Home from '../page/home.jsx'
import Add from '../page/add.jsx'
import Mine from '../page/mine.jsx'

class App extends Component {
    componentWillMount() {
        var {history} = this.props
        history.push('/app/home')
    }


    render() {
        var {location, state} = this.props
        var amimation = state.animationName
        return (
            <div className="App">
                <CSSTransitionGroup
                    transitionName={amimation}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={200}
                >
                    <Route path="/app/home" component={Home} location={location} key={location.key + "1"}/>
                    <Route path="/app/add" component={Add} location={location} key={location.key + "2"}/>
                    <Route path="/app/mine" component={Mine} location={location} key={location.key + "3"}/>
                </CSSTransitionGroup>


                <AppBottom {...this.props} />
            </div>
        );
    }
}

const state2props = function (state) {
    return {state}
}
const actions2props = function (dispatch, state) {
    return {actions: bindActionCreators(actions, dispatch)}
}
export default withRouter(connect(state2props, actions2props)(App));
