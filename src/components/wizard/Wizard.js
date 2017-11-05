import React, { Component } from 'react'

// MODULES
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

// COMPONENTS
import Wiz1 from './wiz1/Wiz1'
import Wiz2 from './wiz2/Wiz2'
import Wiz3 from './wiz3/Wiz3'
import Wiz4 from './wiz4/Wiz4'
import Wiz5 from './wiz5/Wiz5'


// REDUX
import { connect } from 'react-redux'

// OTHER
import stepActive from '../../assets/step_active.png'
import stepCompleted from '../../assets/step_completed.png'
import stepInactive from '../../assets/step_inactive.png'


// CSS
import './wizard.css'

class Wizard extends Component {

    // LIFECYCLE FUNCS
    constructor(props) { // define state and biind methods
        super(props) // defines props in constructor, reduces bugs
        this.state = {
            icons: [1,2,3,4,5]
        }

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
        const path = this.props.location.pathname
        const currentStep = path.slice(path.length - 1)
        console.log(currentStep);

        const icons = this.state.icons.map( val => {
            if (val < currentStep) {
                return <img key={val} src={stepCompleted} />
            } else if (val == currentStep) {
                return <img key={val} src={stepActive} />
            } else {
                return <img key={val} src={stepInactive} />
            }
        })


        return (
            <div className="content-container">
                <div className="wizard-header">
                    <p className="">Add new listing</p>
                    <Link to="/dashboard">
                        <button className="wizard-cancel">Cancel</button>
                    </Link>
                </div>
                <p className="wizard-step-text">Step {currentStep}</p>
                <div className="wizard-progress-icons">
                    { icons }
                </div>
                <Switch>
                    <Route path="/wizard/1" component={Wiz1} />
                    <Route path="/wizard/2" component={Wiz2} />
                    <Route path="/wizard/3" component={Wiz3} />
                    <Route path="/wizard/4" component={Wiz4} />
                    <Route path="/wizard/5" component={Wiz5} />
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

export default Wizard

// REDUX EXPORT

// export default connect( mapStateToProps, mapActionsToProps )(Wizard)