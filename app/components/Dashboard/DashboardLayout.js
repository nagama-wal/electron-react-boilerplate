import React, { Component }  from "react";
// import DashboardHeader from "./DashboardHeader/DashboardHeader";
import DashboardTabs from "./DashboardTabs/DashboardTabs";
// import  DashboardTable  from "./DashboardTable/DashboardTable";


class DashboardLayout extends Component {

    render() {
        return (
            <div className="dashboard-container">
                <div className="title-wrapper">
                    <i className="fas fa-home home-icon"/>
                    <i className="fas fa-chevron-right next-icon"/>
                    <span>Dashboard</span>
                </div>
               {/* <DashboardTabs/> */}
            </div>
        );
    }
}

export default DashboardLayout;