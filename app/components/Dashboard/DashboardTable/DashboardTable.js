import React, { Component }  from "react";
// import SelectComponent from '../SelectComponent';
import {typeOptions, reasonsOptions} from '../variables'
import DatepickerComponent from "../Datepicker";
import { Pagination, PaginationItem, PaginationLink, Table, Input } from 'reactstrap';
import  Btncheckbox  from '../../btnCheckBox/btnCheckBox';
import MultiSelector from "../../MultiSelector/MultiSelector";



export default class DashboardTable extends React.Component {
     constructor(props){
         super(props)
         this.state = {
            datepicker : false
         }
     }
     handleDatepicker(){
         this.setState({
            datepicker : true
         })
     }
  render() {
    return (
        <React.Fragment>
            <div className="dashboard-table-conatainer">
                <Table bordered className="dashboard-table">
                    <thead>
                        <tr className="table-header-row">
                            <th></th>
                            <th>One Portal ID</th>
                            <th>Name</th>
                            <th>Created Date</th>
                            <th>Type</th>
                            <th>Reason</th>
                            <th>Service Date</th>
                            <th>Funeral no.</th>
                            <th>Cementry contract no.</th>
                            <th>Decedent/Benifciary name</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Input type="number" placeholder="All" className="input-fields"/></td>
                            <td> <Input type="name" placeholder="Search" className="input-fields"/></td>
                            {/* <td>
                                <div className="datepicker-container">
                                    <Input type="number"
                                    className={this.state.datepicker ? "show-datepicker" : "hide-datepicker"}
                                    onChange= {() => this.handleDatepicker()}/> 
                                    <DatepickerComponent/>
                                </div>
                            </td> */}
                            <td><DatepickerComponent/></td>
                            <td><MultiSelector placeholder="All" options={typeOptions}/></td>
                            <td><MultiSelector placeholder="All" options={reasonsOptions}/></td>
                            <td> <DatepickerComponent/></td>
                            <td><Input type="number" placeholder="Search" className="input-fields"/></td>
                            <td><Input type="number" placeholder="Search" className="input-fields"/></td>
                            <td><Input type="name" placeholder="Search" className="input-fields"/></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><Btncheckbox/></td>
                        <td>
                            <div>
                                <i className="fas fa-phone font-icons"/>
                                <span>Call</span>
                            </div>
                            <div className="portal-id">2016ACC0013</div>
                        </td>
                        <td>Kunal Satpal</td>
                        <td>06-26-2018</td>
                        <td>Funeral</td>
                        <td>AN</td>
                        <td>21-01-2018</td>
                        <td></td>
                        <td></td>
                        <td>Randon Name</td>
                        <td className="dots position-relative text-center"><span>...</span>
                            <div >
                                <span>Edit Call</span>
                                <span>Convert to Case</span>
                                <span>Quick Notes</span>
                                {/* <hr />
                                <span>Archive</span>
                                <hr />
                                <span>Delete</span> */}
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td><Btncheckbox/></td>
                        <td>
                            <div>
                                <i className="fas fa-folder font-icons case-icon"></i>
                                <span>Case</span>
                            </div>
                            <div  className="portal-id">2016ACC0013</div>
                        </td>
                        <td>Kunal Satpal</td>
                        <td>06-26-2018</td>
                        <td>Funeral</td>
                        <td>AN</td>
                        <td>21-01-2018</td>
                        <td></td>
                        <td></td>
                        <td>Randon Name</td>
                        <td className="dots position-relative text-center"><span>...</span>
                            <div className="show-actions">
                                <span>Edit Call</span>
                                <span>Convert to Case</span>
                                <span>Quick Notes</span>
                                {/* <span>Export</span>
                                <hr />
                                <span>Archive</span>
                                <hr />
                                <span>Delete</span> */}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><Btncheckbox/></td>
                        <td>
                            <div>
                                <i className="fas fa-phone font-icons"/>   
                                <span>Call</span>
                            </div>
                            <div  className="portal-id">2016ACC0013</div>
                        </td>
                        <td>Kunal Satpal</td>
                        <td>06-26-2018</td>
                        <td>Funeral</td>
                        <td>AN</td>
                        <td>21-01-2018</td>
                        <td></td>
                        <td></td>
                        <td>Randon Name</td>
                        <td className="dots position-relative text-center"><span>...</span>
                            <div >
                                <span>Edit Call</span>
                                <span>Convert to Case</span>
                                <span>Quick Notes</span>
                                {/* <span>Export</span>
                                <hr />
                                <span>Archive</span>
                                <hr />
                                <span>Delete</span> */}
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td><Btncheckbox/></td>
                        <td>
                            <div>
                            <i className="fas fa-folder font-icons case-icon"></i>
                                <span>Call</span>
                            </div>
                            <div  className="portal-id">2016ACC0013</div>
                        </td>
                        <td>Kunal Satpal</td>
                        <td>06-26-2018</td>
                        <td>Funeral</td>
                        <td>AN</td>
                        <td>21-01-2018</td>
                        <td></td>
                        <td></td>
                        <td>Randon Name</td>
                        <td className="dots position-relative text-center actions-dropdown"><span>...</span>
                            <div>
                                <span>Edit Call</span>
                                <span>Convert to Case</span>
                                <span>Quick Notes</span>
                                {/* <hr />
                                <span>Archive</span>
                                <hr />
                                <span>Delete</span> */}
                            </div>
                        </td>
                    </tr>

                    </tbody>
                </Table>
            </div>
            <div className="actions-with-pagination">
                <div className="pagination-section">
                    <span className="light-grey">Show Rows: </span> 10 <span className="records-page"> 1-10 of 138</span>
                    <Pagination size="sm" aria-label="Page navigation example">
                        <PaginationItem>
                        <PaginationLink previous href="#" />
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationLink next href="#" />
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>
        </React.Fragment>
    );
  }
}
