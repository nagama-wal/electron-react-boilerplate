import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class ExportSelector extends Component {
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
            <div className="export-selector-wrapper">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle>
                        <span>Share Daysheet</span>
                        <i className="fas fa-chevron-down"></i>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Email</DropdownItem>
                        <DropdownItem>Save as PDF</DropdownItem>
                        <DropdownItem>Print</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}