import React, { Component } from 'react'

// MODULES

// COMPONENTS

// REDUX
import { connect } from 'react-redux'

// OTHER

// CSS
import './homeListing.css'

class HomeListing extends Component {

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
        const listing = {
            title: "Eric's Yachty Yacht",
            description: "This is a dope azz yacht yo!",
            loan: "45",
            mortgage: "2",
            recRent: "2.5",
            desiredRent: "3",
            address: "SB Wharf",
            city: "SB",
            state: "CA",
            zip: "93109",
            img: "https://target.scene7.com/is/image/Target/24005982_Alt05?wid=520&amp;hei=520&amp;fmt=pjpeg"
        }
        return (
            <div className="listing-container">
                <img className="listing-pic" src={listing.img} alt="img" />
                <div className="listing-description-container">
                    <p className="listing-title">{listing.title}</p>
                    <p className="listing-description">{listing.description}</p>
                </div>
                <div className="listing-deets-container">
                    <p className="listing-deet">Loan: ${listing.loan}</p>
                    <p className="listing-deet">Monthly Mortgage: ${listing.mortgage}</p>
                    <p className="listing-deet">Recommended Rent: ${listing.recRent}</p>
                    <p className="listing-deet">Desired Rent: ${listing.desiredRent}</p>
                    <p className="listing-deet">Address: {listing.address}</p>
                    <p className="listing-deet">City: {listing.city}</p>
                    <p className="listing-deet">State: {listing.state}</p>
                    <p className="listing-deet">Zip: {listing.zip}</p>
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

export default HomeListing

// REDUX EXPORT

// export default connect( mapStateToProps, mapActionsToProps )()