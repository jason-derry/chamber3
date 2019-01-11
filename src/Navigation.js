import React, { Component } from 'react';
import { Button, Navbar, NavItem, NavDropdown, MenuItem, Nav, FormGroup, FormControl } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <div className="navbar">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />

          <div className="logo">
            <img src="/chamber.png" class="frontPic" alt="gun" />
            <div class="text">weaponDB</div>
          </div>


        <Navbar fluid inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullLeft>
              <NavDropdown eventKey={1} title="Weapons" id="basic-nav-dropdown">
                <MenuItem eventKey={1.1}>Guns</MenuItem>
                <MenuItem eventKey={1.2}>More Guns</MenuItem>
                <MenuItem eventKey={1.3}>Maybe Swords</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={1.4}>All Weapons</MenuItem>
               </NavDropdown>
              <NavItem eventKey={2} href="#">
                Attachments
              </NavItem>
            </Nav>
            <Nav pullRight>
              <Navbar.Form>
                <FormGroup>
                  <FormControl type="text" placeholder="Type something!" />
                </FormGroup>{' '}
                <Button type="submit">Submit</Button>
              </Navbar.Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
