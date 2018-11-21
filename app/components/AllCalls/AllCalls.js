import React, { Component } from 'react'
import ActionsDisplay from './ActionsDisplay/ActionsDisplay';
import CallsGrid from './CallsGrid/CallsGrid';
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";


class AllCalls extends Component {
  render() {
    return (
      <div>
        <section className="allcalls-section">
            <div className="title-wrapper">
                  <i className="fas fa-home home-icon"/>
                  <i className="fas fa-chevron-right next-icon"/>
                  <span>Call/Leads - All Calls</span>
              </div>
              <h1>All Calls</h1>
              <DashboardHeader/>
              <ActionsDisplay/>
              <CallsGrid/>
        </section>
      </div>
    )
  }
}
export default AllCalls;
