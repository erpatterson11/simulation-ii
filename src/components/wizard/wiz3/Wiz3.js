import React, { Component } from 'react'

// MODULES
import { Link } from 'react-router-dom'

// COMPONENTS

// REDUX
import { connect } from 'react-redux'
import { submitStepThree } from '../../../reducers/newProp'


// OTHER

// CSS
import './wiz3.css'

class Wiz3 extends Component {

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

                <div className="wizard-image-preview">
                    <img className="wizard-image" src="https://user-images.githubusercontent.com/850087/28640180-4f369856-7221-11e7-856d-7cc5e3b4739e.jpg" alt="preview" />
                </div>

                <p className="input-name">Image URL</p>
                <input className="wizard-input" type="text" />

                <div className="wizard-nav-buttons-container">
                    <Link to="/wizard/2">
                        <p className="wizard-button-dark">Previous Step</p>
                    </Link>
                    <Link to="/wizard/4">
                        <p className="wizard-button-dark">Next Step</p>
                    </Link>
                </div>
            </div>
        )
    }
}

// REDUX

function mapStateToProps(state) {
    return state
}

// EXPORT

// export default Wiz3

// REDUX EXPORT

export default connect( mapStateToProps, {submitStepThree} )(Wiz3)