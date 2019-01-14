import React, { Component } from 'react';
import { Button, Navbar, NavItem, NavDropdown, MenuItem, Nav, FormGroup, FormControl } from 'react-bootstrap';

class Navigation extends Component {

  handleSelect = (eventKey) =>{
    console.log(eventKey);
  };

  render() {
    return (
      <div className="navbar">

        <div className="logo">
          <img src="/onechamberwhite.png" class="frontPic" alt="gun" />
          <div class="text">chamber</div>
        </div>


        <Navbar fluid inverse collapseOnSelect onSelect={this.handleSelect}>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullLeft>
              <NavDropdown eventKey={1} title="Weapons" id="basic-nav-dropdown">
                <MenuItem eventKey={1.1}>All Weapons</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={1.2}>Assault</MenuItem>
                <MenuItem eventKey={1.3}>LMG</MenuItem>
                <MenuItem eventKey={1.4}>Pistol</MenuItem>
                <MenuItem eventKey={1.5}>Rifle</MenuItem>
                <MenuItem eventKey={1.6}>Shotgun</MenuItem>
                <MenuItem eventKey={1.7}>SMG</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey={2} title="Attachments" id="basic-nav-dropdown">
                <MenuItem eventKey={2.1}>All Attachments</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={2.2}>Muzzle</MenuItem>
                <MenuItem eventKey={2.3}>Barrel</MenuItem>
                <MenuItem eventKey={2.4}>Sight</MenuItem>
                <MenuItem eventKey={2.5}>Magazine</MenuItem>
                <MenuItem eventKey={2.6}>Grip</MenuItem>
                <MenuItem eventKey={2.7}>Stock</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={3} href="#">
                Player List
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
