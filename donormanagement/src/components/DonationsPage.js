import React from 'react'
import {connect} from 'react-redux'
import {
    Button,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledCollapse,
    Card,
    CardBody
} from 'reactstrap';

import './DonationsPage.css'

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
                          <NavLink href="#">Add Donor</NavLink>
                        </NavItem>
                      </Nav>
                    </Navbar>
                </div>
                <div className="donors">
                <Button color="primary" id="toggler" style={{ margin: '1rem' }}>
                    Donors Name
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                    <Card>
                        <CardBody>
                            donors creds
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <Button size="sm">Edit Donor</Button>                  
                </div>
            </div>
        )
    }
}

export default connect(null, {  })(DonationsPage)