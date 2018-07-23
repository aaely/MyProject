import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
        return [<li><a href="/auth/google">Login with Google</a></li>,<li><a href="/auth/facebook">Login With Facebook</a></li>];
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="3"><a>Credits: {this.props.auth.credits}</a></li>,
                    <li key="4"><a href="/store">Store</a></li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    }

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
                <nav>
                    <div className="navbar">
                    <Link to={this.props.auth ? '/surveys' : '/'} className="left" style={{fontSize: 30}}>My Project</Link>
                    <ul id="nav-mobile" className="right">
                        {this.renderContent()}
                    </ul>
                    </div>
                </nav>
            </div>
        );
    };
}

function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Header);