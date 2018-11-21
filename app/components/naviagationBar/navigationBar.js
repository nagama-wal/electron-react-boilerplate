import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Collapse, Navbar } from 'reactstrap';
import Search from './search/search'
import User from './user/user'

export default class NavigationBar extends Component {
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
            <div className="navigation-bar">
                <Navbar className="custom-container" expand="lg">
                    <div className="custom-navbrand d-flex align-items-center justify-content-start">
                        <Link className="toggle-navigation d-flex align-items-center justify-content-center" to="javascript:void(0);">
                            <span className="hamburger">
                                <small></small>
                                <small></small>
                                <small></small>
                            </span>
                        </Link>
                        <Link className="navbar-brand" to="javascript:void(0);">
                            <span>CLAS</span>
                        </Link>
                    </div>
                    <div className="navigation-search-wrapper mr-auto d-flex align-items-center">
                        <Search/>
                        <div className="advanced-search-wrapper">
                            <Link to="javascript:void(0);">
                                <span>Advanced Search{' '}</span>
                                <i className="fas fa-angle-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="toggle-profile-wrapper d-block d-lg-none" onClick={this.toggle} >
                        <Link className="toggle-profile" to="javascript:void(0);">
                            <i className="fas fa-ellipsis-v"></i>
                        </Link>
                    </div>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto navbar-right-wrapper mobile-search d-flex align-items-center justify-content-center" navbar>
                            <NavItem>
                                <Link className="help-wrapper d-flex align-items-center justify-content-center" to="javascript:void(0);">
                                    <i className="far fa-question-circle"></i>
                                    <span>Help</span>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <User/>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
