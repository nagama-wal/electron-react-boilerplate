import React, {Component} from 'react';
import CaseInfoTabs from '../CaseInfo/CaseInfo_Tabs/CaseInfo_Tabs';
import DashboardLayout from '../Dashboard/DashboardLayout'
 class CaseInfo extends Component {
     state = {  }
     render() {
         return (
             <div>
                <div className="caseinfo-header-wrapper">
                    <DashboardLayout/>
                    <div className="caseinfo-head">
                        <i className="fas fa-chevron-right next-icon"/>
                        <span>Case 1212434355</span>
                    </div>
                </div>
                <CaseInfoTabs/>
             </div>
         );
     }
 }
 
 export default CaseInfo;