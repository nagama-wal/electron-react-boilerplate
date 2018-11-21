import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import BtnCheckbox from '../../btnCheckBox/btnCheckBox';

export default class ResourceSelector extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
        <div className="resource-selector-wrapper">
            <button className="btn-daysheet" onClick={this.toggle}>
                <span>Select Resources</span>
                <i className="fas fa-chevron-down"></i>
            </button>
            <Collapse className="resource-collapse" isOpen={this.state.collapse}>
                <form className="resource-form">
                    <div className="form-group">
                        <label className="sr-only">Resource</label>
                        <input type="text" className="resouce-input" placeholder="Search resources..." />
                    </div>
                    <ul className="resource-list-group list-unstyled">
                        <li className="resource-list d-flex align-items-center justify-content-between">
                            <span className="resource-name">John</span>
                            <BtnCheckbox/>
                        </li>
                        <li className="resource-list d-flex align-items-center justify-content-between">
                            <span className="resource-name">Matt</span>
                            <BtnCheckbox/>
                        </li>
                    </ul>
                </form>
            </Collapse>
        </div>
        );
    }
}