import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './payments';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink, } from 'reactstrap';

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
                    <NavLink key='5' href="/auth/google">Login with Google</NavLink>,/*
                    <NavLink key='6' href="/auth/facebook">Login With Facebook</NavLink>,*/
                    <NavLink key='7' href="/resume">About Me</NavLink>
                ];
            default:
                return [
                    <NavLink key='7' href="/resume">About Me</NavLink>,
                    <NavItem key='1'><NavLink><Payments /></NavLink></NavItem>,
                    <NavItem key='2'><NavLink>Credits: {this.props.auth.credits}</NavLink></NavItem>,
                    <NavItem key='3'><NavLink href="/store">Store</NavLink></NavItem>,
                    <NavItem key='4'><NavLink href="/api/logout">Logout</NavLink></NavItem>
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
                    <Link to={this.props.auth ? '/surveys' : '/'} className='navbar-brand mr-auto ' style={{color: 'rgb(0, 123, 255)'}}>My Project</Link>
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