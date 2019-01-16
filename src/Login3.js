import React, { Component } from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';

class Login extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div className="login">
                <input type="text" placeholder="username"/> <br/>
                <input type="password" placeholder="password" /> <br/>
                <button className="loginButton">Login</button>
            </div>

            // <div className="loginDropdown">
            //     <Button className="dropdownButton" bsSize="xs" onClick={() => this.setState({ open: !this.state.open })}>
            //         Login/Register ▼
            //     </Button>
            //     <Collapse in={this.state.open}>
            //         <div className="login">
            //             <input type="text" placeholder="username" /> <br />
            //             <input type="password" placeholder="password" /> <br />
            //             <Button className="loginButton" bsSize="xs">Login</Button>
            //             <Button className="registerButton" bsSize="xs">Sign up</Button>
            //         </div>
            //     </Collapse>
            // </div>
        );
    }
}

export default Login;
