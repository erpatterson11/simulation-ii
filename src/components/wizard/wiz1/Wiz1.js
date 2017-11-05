import React, { Component } from 'react'

// MODULES
import { Link } from 'react-router-dom'

// COMPONENTS

// REDUX
import { connect } from 'react-redux'
import { submitStepOne } from '../../../reducers/newProp'

// OTHER

// CSS
import './wiz1.css'

class Wiz1 extends Component {

    // LIFECYCLE FUNCS
    constructor(props) { // define state and biind methods
        super(props) // defines props in constructor, reduces bugs
        this.state = {
            name: "",
            desc: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.submitInput = this.submitInput.bind(this)
    }

    // componentWillMount() {} // is run before mounting. setState won't trigger re-render. avoid side-effects or subscriptions
    // componentDidMount() {} // is run after mounting. target DOM nodes here. load async data here. 
    // componentWillReceiveProps(nextProps) {} // is run before props changed or parent triggers rerender. use to setState. may run when new props aren't received.
    // shouldComponentUpdate(nextProps, nextState) {} // is run before props or state change triggers rerender. return false to stop component rerender 
    // componentWillUpdate(nextProps, nextState) {} // is run after new props or state are received and comp will rerender. can't call setState
    // componentDidUpdate() {} // is run after initial rerender. operate on DOM. make network requests if state or props changed
    // componentWillUnmount() {} // is run after component unmounts. cancel timers, event listeners, network requests, destroy manually created DOM elements, etc...

    // CUSTOM FUNCS
    handleNameChange(val) {
        this.setState({name: val})
    }

    handleDescriptionChange(val) {
        this.setState({desc: val})
    }

    submitInput() {
        this.props.submitStepOne(this.state)
        this.props.history.push('/wizard/2')
    }


    // RENDER
    render() {
        return (
            <div className="wizard-route-container">
                <p className="input-name">Property Name</p>
                <input val={this.state.name} onChange={(e)=>this.handleNameChange(e.target.value)} className="wizard-input" type="text" />
                <p className="input-name">Property Description</p>
                <textarea val={this.state.desc} onChange={(e)=>this.handleDescriptionChange(e.target.value)} className="wizard-input wizard-textarea" type="text" />
                <div className="wizard-1-nav-buttons">
                    <p onClick={this.submitInput} className="wizard-button-dark">Next Step</p>
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

// export default Wiz1

// REDUX EXPORT

export default connect( mapStateToProps, {submitStepOne} )(Wiz1)