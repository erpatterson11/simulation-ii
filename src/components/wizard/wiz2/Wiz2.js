import React, { Component } from 'react'

// MODULES
import { Link } from 'react-router-dom'

// COMPONENTS

// REDUX
import { connect } from 'react-redux'
import { submitStepTwo } from '../../../reducers/newProp'


// OTHER

// CSS
import './wiz2.css'

class Wiz2 extends Component {

    // LIFECYCLE FUNCS
    constructor(props) { // define state and biind methods
        super(props) // defines props in constructor, reduces bugs
        this.state = {
            address: "",
            city: "",
            state: "",
            zip: ""
        }
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handleCityChange = this.handleCityChange.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.handleZipChange = this.handleZipChange.bind(this)
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

    handleAddressChange(val) {
        this.setState({address: val})
    }

    handleCityChange(val) {
        this.setState({city: val})
    }

    handleStateChange(val) {
        this.setState({state: val})
    }

    handleZipChange(val) {
        this.setState({zip: val})
    }

    submitInput() {
        this.props.submitStepTwo(this.state)
        this.props.history.push('/wizard/3')
    }


    // RENDER
    render() {
        return (
            <div className="wizard-route-container">
                <p className="input-name">Address</p>
                <input value={this.state.address} onChange={(e)=>this.handleAddressChange(e.target.value)} className="wizard-input" type="text" />
                <div className="wizard-two-column-container">
                    <div className="wizard-input-container-half">
                        <p className="input-name">City</p>
                        <input value={this.state.city} onChange={(e)=>this.handleCityChange(e.target.value)} className="wizard-input wizard-input-half" type="text" />
                    </div>
                    <div className="wizard-input-container-half">
                        <p className="input-name">State</p>
                        <input value={this.state.state} onChange={(e)=>this.handleStateChange(e.target.value)} className="wizard-input wizard-input-half" type="text" />
                    </div>
                    <div className="wizard-input-container-half wizard-zip-container">
                        <p className="input-name">Zip</p>
                        <input value={this.state.zip} onChange={(e)=>this.handleZipChange(e.target.value)} className="wizard-input wizard-input-half" type="text" />
                    </div>
                </div>

                <div className="wizard-nav-buttons-container">
                    <Link to="/wizard/1">
                        <p className="wizard-button-dark">Previous Step</p>
                    </Link>
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

// export default Wiz2

// REDUX EXPORT

export default connect( mapStateToProps, {submitStepTwo} )(Wiz2)