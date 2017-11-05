import React, { Component } from 'react'

// MODULES
import axios from 'axios'

// COMPONENTS

// REDUX
import { connect } from 'react-redux'

// OTHER
import authLogo from '../../assets/auth_logo.png' 

// CSS
import './login.css'

class Login extends Component {

    // LIFECYCLE FUNCS
    constructor(props) { // define state and biind methods
        super(props) // defines props in constructor, reduces bugs
        this.state = {
            username: "",
            password: ""
        }
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
    }

    // componentWillMount() {} // is run before mounting. setState won't trigger re-render. avoid side-effects or subscriptions
    // componentDidMount() {} // is run after mounting. target DOM nodes here. load async data here. 
    // componentWillReceiveProps(nextProps) {} // is run before props changed or parent triggers rerender. use to setState. may run when new props aren't received.
    // shouldComponentUpdate(nextProps, nextState) {} // is run before props or state change triggers rerender. return false to stop component rerender 
    // componentWillUpdate(nextProps, nextState) {} // is run after new props or state are received and comp will rerender. can't call setState
    // componentDidUpdate() {} // is run after initial rerender. operate on DOM. make network requests if state or props changed
    // componentWillUnmount() {} // is run after component unmounts. cancel timers, event listeners, network requests, destroy manually created DOM elements, etc...

    // CUSTOM FUNCS
    handleUsernameChange(val) {
        this.setState({username: val})
    }

    handlePasswordChange(val) {
        this.setState({password: val})
    }

    login() {
        axios.post('http://localhost:3005/api/login', this.state)
            .then( auth => this.props.history.push('/dashboard') )
            .catch( err => alert("Incorrect username or password"))
    }

    register() {
        axios.post('http://localhost:3005/api/register', this.state)
            .then( auth => this.props.history.push('/dashboard') )
    }

    // RENDER
    render() {
        return (
            <div className="login-container">
                <div className="content-container">
                    <img className='auth-logo' src={authLogo} alt="auth logo" />
                    <p className="auth-input-name">Username</p>
                    <input 
                        className="auth-input"
                        type="text"
                        value={this.state.username}
                        onChange={(e)=>this.handleUsernameChange(e.target.value)}
                    />
                    <p className="auth-input-name">Password</p>
                    <input 
                        className="auth-input" 
                        type="text" 
                        value={this.state.password}
                        onChange={(e)=>this.handlePasswordChange(e.target.value)}
                    />
                    <div className='login-button-container'>
                        <button 
                            className="auth-button login-button"
                            onClick={this.login}
                        >Login</button>
                        <button 
                            className="auth-button register-button"
                            onClick={this.register}
                        >Register</button>
                    </div>
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

export default Login

// REDUX EXPORT

// export default connect( mapStateToProps, mapActionsToProps )(Login)