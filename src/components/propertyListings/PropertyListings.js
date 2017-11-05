import React, { Component } from 'react'

// MODULES
import { Link } from 'react-router-dom'

// COMPONENTS
import HomeListing from './homeListing/HomeListing'

// REDUX
import { connect } from 'react-redux'

// OTHER

// CSS
import './propertyListings.css'

class PropertyListings extends Component {

    // LIFECYCLE FUNCS
    constructor(props) { // define state and biind methods
        super(props) // defines props in constructor, reduces bugs
        this.state = {
            rentFilter: 0,
            listings: ["1","2","3"]
        }
        this.handleFilterValueChange = this.handleFilterValueChange.bind(this)
    }

    // componentWillMount() {} // is run before mounting. setState won't trigger re-render. avoid side-effects or subscriptions
    // componentDidMount() {} // is run after mounting. target DOM nodes here. load async data here. 
    // componentWillReceiveProps(nextProps) {} // is run before props changed or parent triggers rerender. use to setState. may run when new props aren't received.
    // shouldComponentUpdate(nextProps, nextState) {} // is run before props or state change triggers rerender. return false to stop component rerender 
    // componentWillUpdate(nextProps, nextState) {} // is run after new props or state are received and comp will rerender. can't call setState
    // componentDidUpdate() {} // is run after initial rerender. operate on DOM. make network requests if state or props changed
    // componentWillUnmount() {} // is run after component unmounts. cancel timers, event listeners, network requests, destroy manually created DOM elements, etc...

    // CUSTOM FUNCS
    handleFilterValueChange(val) {
        this.setState({rentFilter: val})
    }
    // RENDER
    render() {
        return (
            <div className="content-container property-listings-container">
                <Link to="/wizard/1">
                    <button className="new-listing-button">Add new property</button>
                </Link>
                <div className="listing-filter-container">
                    <p className="listing-filter-text">List properties with "desired rent" greater than: $</p>
                    <input 
                        className="listing-filter-input"
                        type="text" 
                        placeholder="0" 
                        value={this.state.rentFilter}
                        onChange={(e)=>this.handleFilterValueChange(e.target.value)}
                    />
                    <button className="listing-filter-button">Filter</button>
                    <button className="reset-filter-button">Reset</button>
                </div>
                <p className="listings-header-text">Home Listing</p>
                {
                    this.state.listings.length > 0
                    &&
                    this.state.listings.map( listing => <HomeListing /> )
                }
            </div>
        )
    }
}

// REDUX

function mapStateToProps(state) {
    return state
}

// EXPORT

export default PropertyListings

// REDUX EXPORT

// export default connect( mapStateToProps, mapActionsToProps )(PropertyListings)