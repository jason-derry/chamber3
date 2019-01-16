import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div className="loginDropdown">
                <Button className="dropdownButton" color="secondary" onClick={this.toggle} size="sm">Login/Register</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <div className="login">
                            <input type="text" placeholder="username" /> <br />
                            <input type="password" placeholder="password" /> <br />
                            <Button className="loginButton" size="sm">Login</Button>
                            <Button className="registerButton" size="sm">Sign up</Button>
                        </div>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default Login;
