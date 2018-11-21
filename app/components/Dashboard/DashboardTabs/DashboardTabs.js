import React, { Component }  from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import DashboardTable from "../DashboardTable/DashboardTable"
import Calendar from "../../daysheet/daysheet";

class DashboardTabs extends Component {
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
            <div className= "tabs-wrapper">
            <Nav tabs className="nav-tabs-block">
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  DASHBOARD
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  DAYSHEET
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
            
              <TabPane tabId="1">
                <DashboardHeader/>
                <DashboardTable/>
              </TabPane>

              <TabPane tabId="2">
                <Calendar/>
              </TabPane>
            </TabContent>
          </div>
        );
      }
    }

export default DashboardTabs;