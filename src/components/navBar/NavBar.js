import React, { Component } from 'react'

// MODULES
import axios from 'axios'

// COMPONENTS


// REDUX
import { connect } from 'react-redux'

// OTHER
import headerLogo from '../../assets/header_logo.png'

// CSS
import './navBar.css'

class NavBar extends Component {

    // LIFECYCLE FUNCS
    constructor(props) { // define state and biind methods
        super(props) // defines props in constructor, reduces bugs
        this.state = {}
        this.logout = this.logout.bind(this)
    }

    // CUSTOM FUNCS
    logout() {
        console.log(this.props)
        axios.post('http://localhost:3005/api/logout')
            .then( res => {
                console.log(res);
                this.props.history.push('/login')
            })
    }

    // RENDER
    render() {
        return (
            <nav className="nav-bar">
                <div className="nav-content-container">
                    <div className="nav-logo-container">
                        <img className="nav-logo" src={headerLogo} alt="logo" />
                        <p className="nav-logo-text"><span className="logo-text-bold">Houser</span><span>Dashboard</span></p>
                    </div>
                    <p className="logout-text" onClick={this.logout}>Logout</p>
                </div>
            </nav>
        )
    }
}

// REDUX

function mapStateToProps(state) {
    return state
}

// EXPORT

export default NavBar

// REDUX EXPORT

// export default connect( mapStateToProps, mapActionsToProps )(NavBar)