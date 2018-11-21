import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import UserImage from '../../../assets/images/toggle-mobile-user.png';
import { Link } from 'react-router-dom';

export default class User extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <div className="user-section">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle className="user-section-btn d-flex align-items-center justify-content-center">
                        <small className="user-image-wrapper">
                            <b className="d-flex align-items-center justify-content-center">J</b>
                            {/* <img src={UserImage} alt="user image" classname="user-image"/> */}
                        </small>
                        <span className="user-name">John Doe</span>
                        <i className="fas fa-angle-down"></i>
                    </DropdownToggle>
                    <DropdownMenu className="user-section-dropdownlists">
                        <Link className="user-section-dropdownlist" to="javascript:void(0);">Recent Activity</Link>
                        <Link className="user-section-dropdownlist" to="javascript:void(0);">My Account</Link>
                        <Link className="user-section-dropdownlist user-logout" to="javascript:void(0);">Log Out</Link>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}