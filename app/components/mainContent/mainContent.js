import React, { Component } from 'react';
import Daysheet from '../daysheet/daysheet';
import { Collapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import NewCall from "../NewCall/NewCall";
import AllCalls from "../AllCalls/AllCalls";
import classnames from 'classnames';
import DashboardLayout from '../Dashboard/DashboardLayout';


export default class MainContent extends Component {
    constructor(props) {
        super(props);
    
        this.tabing = this.tabing.bind(this);
        this.collapsing = this.collapsing.bind(this);

        this.state = {
            activeTab: '1',
            collapse: false,
            collapse1: false,
            collapse2: false,
            collapse3: false,
            collapse4: false,
        };
    }
    
    tabing(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    collapsing(collapseId) {
        switch(collapseId){
                case 0 : this.setState({ collapse: !this.state.collapse });
                        break;
                case 1 : this.setState({ collapse1: !this.state.collapse1 });
                        break;        
                case 2 : this.setState({ collapse2: !this.state.collapse2 });
                        break;        
                case 3 : this.setState({ collapse3: !this.state.collapse3 });
                        break;        
                case 4 : this.setState({ collapse4: !this.state.collapse4 });
                        break;
                default :   this.setState({ collapse: !this.state.collapse });     
        }
    }
    render() {
        return (
            <div className="main-content-section">
                <div className="primary-navigation">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.tabing('1'); }}
                            >
                                <i className="fas fa-home"></i>
                                <span>Home</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.tabing('2'); }}
                            >
                                <i className="fas fa-signal"></i>
                                <span>Dashboard</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={this.state.collapse ? 'nav-opened':''} onClick={() => {this.collapsing(0)}}>
                                <small className="fas fa-caret-down"></small>
                                <i className="fas fa-phone-volume"></i>
                                <span>Call/Leads</span>
                            </NavLink>
                            <Collapse isOpen={this.state.collapse}>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() => { this.tabing('3'); }}
                                >
                                    <span>New Call</span>
                                </NavLink>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '4' })}
                                    onClick={() => { this.tabing('4'); }}
                                >
                                    <span>All Calls</span>
                                </NavLink>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '5' })}
                                    onClick={() => { this.tabing('5'); }}
                                >
                                    <span>Edit Call</span>
                                </NavLink>
                            </Collapse>
                        </NavItem>
                        <NavItem>
                            <NavLink className={this.state.collapse1 ? 'nav-opened':''} onClick= {() => {this.collapsing(1)}}>
                                <small className="fas fa-caret-down"></small>
                                <i className="far fa-building"></i>
                                <span>Heritage Foundation</span>
                            </NavLink>
                            <Collapse isOpen={this.state.collapse1}>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '6' })}
                                    onClick={() => { this.tabing('6'); }}
                                >
                                    <span>Heritage Foundation 1</span>
                                </NavLink>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '7' })}
                                    onClick={() => { this.tabing('7'); }}
                                >
                                    <span>Heritage Foundation 2</span>
                                </NavLink>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '8' })}
                                    onClick={() => { this.tabing('8'); }}
                                >
                                    <span>Heritage Foundation 3</span>
                                </NavLink>
                            </Collapse>
                        </NavItem>
                        <NavItem>
                            <NavLink className={this.state.collapse2 ? 'nav-opened':''} onClick={() => this.collapsing(2)}>
                                <small className="fas fa-caret-down"></small>
                                <i className="fas fa-wrench"></i>
                                <span>Maintenance</span>
                            </NavLink>
                            <Collapse isOpen={this.state.collapse2}>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '9' })}
                                    onClick={() => { this.tabing('9'); }}
                                >
                                    <span>Maintenance 1</span>
                                </NavLink>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '10' })}
                                    onClick={() => { this.tabing('10'); }}
                                >
                                    <span>Maintenance 2</span>
                                </NavLink>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '11' })}
                                    onClick={() => { this.tabing('11'); }}
                                >
                                    <span>Maintenance 3</span>
                                </NavLink>
                            </Collapse>
                        </NavItem>
                        <NavItem>
                            <NavLink className={this.state.collapse3 ? 'nav-opened':''} onClick={() => this.collapsing(3)}>
                                <small className="fas fa-caret-down"></small>
                                <i className="fas fa-info-circle"></i>
                                <span>Information</span>
                            </NavLink>
                            <Collapse isOpen={this.state.collapse3}>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '12' })}
                                    onClick={() => { this.tabing('12'); }}
                                >
                                    <span>Information 1</span>
                                </NavLink>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '13' })}
                                    onClick={() => { this.tabing('13'); }}
                                >
                                    <span>Information 2</span>
                                </NavLink>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '14' })}
                                    onClick={() => { this.tabing('14'); }}
                                >
                                    <span>Information 3</span>
                                </NavLink>
                            </Collapse>
                        </NavItem>
                        <NavItem>
                            <NavLink className={this.state.collapse4 ? 'nav-opened':''} onClick={() => this.collapsing(4)}>
                                <small className="fas fa-caret-down"></small>
                                <i className="fas fa-user"></i>
                                <span>Admin</span>
                            </NavLink>
                            <Collapse isOpen={this.state.collapse4}>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '15' })}
                                    onClick={() => { this.tabing('15'); }}
                                >
                                    <span>Admin 1</span>
                                </NavLink>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '16' })}
                                    onClick={() => { this.tabing('16'); }}
                                >
                                    <span>Admin 2</span>
                                </NavLink>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '17' })}
                                    onClick={() => { this.tabing('17'); }}
                                >
                                    <span>Admin 3</span>
                                </NavLink>
                            </Collapse>
                        </NavItem>
                    </Nav>
                    <div className="cypress-copy-wrapper d-flex align-items-start flex-column">
                        <Link to="javascript:void(0);">Terms and Conditions</Link>
                        <Link to="javascript:void(0);">Privacy Policy</Link>
                        <Link to="javascript:void(0);">General Price List</Link>
                        <Link to="javascript:void(0);">Cypress Lawn  © 2018</Link>
                    </div>
                </div>
                <div className="primary-navigation-content">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            Home Page Content
                        </TabPane>
                        <TabPane tabId="2">
                            <DashboardLayout/>
                        </TabPane>
                        <TabPane tabId="3">
                            <NewCall/>
                        </TabPane>
                        <TabPane tabId="4">
                            <AllCalls/>
                        </TabPane>
                        <TabPane tabId="5">
                            Call/Leads 3 Content
                        </TabPane>
                        <TabPane tabId="6">
                            Heritage Foundation 1 Content
                        </TabPane>
                        <TabPane tabId="7">
                            Heritage Foundation 2 Content
                        </TabPane>
                        <TabPane tabId="8">
                            Heritage Foundation 3 Content
                        </TabPane>
                        <TabPane tabId="9">
                            Maintenance 1 Content
                        </TabPane>
                        <TabPane tabId="10">
                            Maintenance 2 Content
                        </TabPane>
                        <TabPane tabId="11">
                            Maintenance 3 Content
                        </TabPane>
                        <TabPane tabId="12">
                            Information 1 Content
                        </TabPane>
                        <TabPane tabId="13">
                            Information 2 Content
                        </TabPane>
                        <TabPane tabId="14">
                            Information 3 Content
                        </TabPane>
                        <TabPane tabId="15">
                            Admin 1 Content
                        </TabPane>
                        <TabPane tabId="16">
                            Admin 2 Content
                        </TabPane>
                        <TabPane tabId="17">
                            Admin 3 Content
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        )
    }
}
