import React from 'react'
import {connect} from 'react-redux'
import {
    Button,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class DonationsPage extends React.Component {
    render() {       
        return (
            <div>
                <div>
                    <Navbar color="light" light expand="md">
                      <NavbarBrand href="/">Donor Management</NavbarBrand>
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                          <NavLink href="/signup">Signup</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">Link to Webpage</NavLink>
                        </NavItem>
                      </Nav>
                    </Navbar>
                </div>
                <div className="donors" >
                  <h3>DONORS</h3>
                  <Button size="sm">Edit Donor</Button>
                </div>
            </div>
        )
    }
}

export default connect(null, {  })(DonationsPage)