import React, { Component } from 'react'

// MODULES
import { Link } from 'react-router-dom'

// COMPONENTS

// REDUX
import { connect } from 'react-redux'
import { submitStepFive, submitNewProp } from '../../../reducers/newProp'


// OTHER

// CSS
import './wiz5.css'

class Wiz5 extends Component {

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
            <div className="wizard-route-container">
                <p className="wizard-recommended-rent">Recommended Rent $5000</p>

                <p className="input-name">Monthly Mortgage</p>
                <input className="wizard-input" type="text" />
                <div className="wizard-nav-buttons-container">
                    <Link to="/wizard/4">
                        <p className="wizard-button-dark">Previous Step</p>
                    </Link>
                    <p className="wizard-button-bright">Complete</p>
                </div>
            </div>
        )
    }
}

// REDUX
function mapStateToProps(state) {
    return {newProp: state.newProp}
}

// EXPORT

// export default Wiz5

// REDUX EXPORT

export default connect( mapStateToProps, {submitStepFive} )(Wiz5)