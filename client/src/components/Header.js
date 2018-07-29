import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './payments';
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
    DropdownItem } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
        collapsed: true
        };
  }

    toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [
                    <NavLink href="/auth/google">Login with Google</NavLink>,
                    //<li><a href="/auth/facebook">Login With Facebook</a></li>
                ];
            default:
                return [
                    <NavItem><NavLink><Payments /></NavLink></NavItem>,
                    <NavItem><NavLink>Credits: {this.props.auth.credits}</NavLink></NavItem>,
                    <NavItem><NavLink href="/store">Store</NavLink></NavItem>,
                    <NavItem><NavLink href="/api/logout">Logout</NavLink></NavItem>
                ];
        }}

    renderContent1() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return;
            default:
                return [
                    
                ]
        }
    }
    render() {
        return (
            <div>
                <Navbar color="dark" expand="md" dark>
                    <NavbarBrand className="mr-auto"><Link to={this.props.auth ? '/surveys' : '/'}>My Project</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.renderContent()}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    };
}

function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Header);