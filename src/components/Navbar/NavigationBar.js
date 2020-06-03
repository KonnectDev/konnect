import React from 'react';
import { Nav, Navbar, Form, FormControl, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import withRouter from "react-router-dom/es/withRouter";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import logo from '../../assets/img/Konnect-logo-text.svg'
import '../../assets/css/NavigationBar.scss'


const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;



class NavigationBar extends React.Component {
    render() {


    return (

  <Styles>
      <Navbar expand="lg">
          <Navbar.Brand href="/"><img src={logo} className="logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Form className="form-center">
              <Nav.Item></Nav.Item>
          </Form>
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                  <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link onClick={this.props.logout} href="/">Logout</Nav.Link></Nav.Item>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  </Styles>
)




}
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(NavigationBar));
