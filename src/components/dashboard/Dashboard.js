import React, { Component } from 'react'

// MODULES
import { Switch, Route } from 'react-router-dom'

// COMPONENTS
import NavBar from '../navBar/NavBar'
import PropertyListings from '../propertyListings/PropertyListings'
import Wizard from '../wizard/Wizard'

// REDUX
import { connect } from 'react-redux'

// OTHER

// CSS
import './dashboard.css'

class Dashboard extends Component {

    // LIFECYCLE FUNCS
    constructor(props) { // define state and biind methods
        super(props) // defines props in constructor, reduces bugs
        this.state = {}
    }

    // componentWillMount() {} // is run before mounting. setState won't trigger re-render. avoid side-effects or subscriptions
    // componentDidMount() {} // is run after mounting. target DOM nodes here. load async data here. 
    // componentWillReceiveProps(nextProps) {} // is run before props changed or parent triggers rerender. use to setState. may run when new props aren't received.
    // shouldComponentUpdate(nextProps, nextState) {} // is run before props or state change triggers rerender. return false to stop component rerender 
    // componentWillUpdate(nextProps, nextState) {} // is run after new props or state are received and comp will rerender. can't call setState
    // componentDidUpdate() {} // is run after initial rerender. operate on DOM. make network requests if state or props changed
    // componentWillUnmount() {} // is run after component unmounts. cancel timers, event listeners, network requests, destroy manually created DOM elements, etc...

    // CUSTOM FUNCS

    // RENDER
    render() {
        return (
            <div className="dashboard-container">
                <Route path="*" component={NavBar} />
                <Switch>
                    <Route exact path="/dashboard" component={PropertyListings} />
                    <Route path="/wizard" component={Wizard} />
                </Switch>
            </div>
        )
    }
}

// REDUX

function mapStateToProps(state) {
    return state
}

// EXPORT

export default Dashboard

// REDUX EXPORT

// export default connect( mapStateToProps, mapActionsToProps )(Dashboard)