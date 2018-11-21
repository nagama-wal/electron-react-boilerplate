import React, { Component } from 'react';
import classnames from 'classnames';
import Others from "./Others/Others";
import ServiceRequest from "./ServiceRequest/ServiceRequest";
import PreNeed from "./PreNeed/PreNeed";
import AtNeed from "./AtNeed/AtNeed";
import GenealogySearch from "./GenealogySearch/GenealogySearch";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export default class CallReasons extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
  render() {
    return (
      <div className="call-reasons">
        <h5>REASON FOR CALL</h5>
        <section className="call-reasons-section">
        <Nav tabs className="d-flex">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Someone has Passed 
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Interested in PN
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Service/Maintainance request
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Genealogy search
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              Other Inquiries
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <AtNeed/>
          </TabPane>
          <TabPane tabId="2">
            <PreNeed/>
          </TabPane>
          <TabPane tabId="3">
            <ServiceRequest/>
          </TabPane>
          <TabPane tabId="4">
            <GenealogySearch/>
          </TabPane>
          <TabPane tabId="5">
            <Others/>
          </TabPane>
        </TabContent>
        </section>
      </div>
    )
  }
}
