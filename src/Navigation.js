import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Navigation extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="navbar">

        <div className="logo">
          <img src="/onechamberwhite.png" class="frontPic" alt="gun" />
          <div class="text">chamber</div>
        </div>


        <Navbar dark color="dark" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Weapons</DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>All Weapons</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Assault</DropdownItem>
                  <DropdownItem>Handgun</DropdownItem>
                  <DropdownItem>LMG</DropdownItem>
                  <DropdownItem>Rifle</DropdownItem>
                  <DropdownItem>Shotgun</DropdownItem>
                  <DropdownItem>SMG</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Attachments</DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>All Attachments</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Muzzle</DropdownItem>
                  <DropdownItem>Barrel</DropdownItem>
                  <DropdownItem>Sight</DropdownItem>
                  <DropdownItem>Magazine</DropdownItem>
                  <DropdownItem>Grip</DropdownItem>
                  <DropdownItem>Stock</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </Nav>
              <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/players/">Player List</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
