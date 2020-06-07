import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, DropdownItem} from "react-bootstrap";

class UserNavbarLinks extends Component {
    render() {

        return (
            <div>
                <Nav>
                    <NavItem eventKey={3} href="#">
                        <Nav.Link href="/" onClick={this.props.loggingout}>
                            Log out
                        </Nav.Link>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default UserNavbarLinks;
