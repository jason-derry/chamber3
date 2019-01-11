import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <input placeholder="username"/> <br/>
                <input placeholder="password" /> <br/>
                <button>Login</button>
            </div>
        );
    }
}

export default Login;
