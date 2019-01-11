import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <input type="text" placeholder="username"/> <br/>
                <input type="password" placeholder="password" /> <br/>
                <button>Login</button>
            </div>
        );
    }
}

export default Login;
