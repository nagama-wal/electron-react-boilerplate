import React from 'react';
import SelectComponent from '../../Dashboard/SelectComponent';
import {typeOptions, reasonsOptions, assignedOptions, statusOptions} from '../../Dashboard/variables'
import DatepickerComponent from "../../Dashboard/Datepicker";
import { Pagination, PaginationItem, PaginationLink, Table, Input} from 'reactstrap';
import  Btncheckbox from "../../btnCheckBox/btnCheckBox";

export default class Example extends React.Component {
  render() {
    return (
    <div>
    <div className="allcalls-container dashboard-table-conatainer">
      <Table bordered className="dashboard-table">
        <thead>
          <tr>
            <th></th>
            <th>Status</th>
            <th>OnePortal ID</th>
            <th>Created Date</th>
            <th>Age (Days)</th>
            <th>Modified Date</th>
            <th>Caller Name</th>
            <th>Reason</th>
            <th>Contact Number</th>
            <th>Assigned To</th>
            <th></th>
          </tr>
          <tr>
            <td></td>
            <td><SelectComponent options={statusOptions}/></td>
            <td><Input type="number" placeholder="All" className="input-fields"/></td>
            <td> <DatepickerComponent/></td>
            <td> <Input type="number" placeholder="Search" className="input-fields"/></td>
            <td> <DatepickerComponent/></td>
            <td><Input type="name" placeholder="Search" className="input-fields"/></td>
            <td><SelectComponent options={reasonsOptions}/></td>
            <td><Input type="number" placeholder="Search" className="input-fields"/></td>
            <td><SelectComponent options={assignedOptions}/></td>            
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr className="checked">
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div className="show-actions">
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
          <tr>
            <td><Btncheckbox/></td>
            <td>In Progress</td>
            <td className="portal-id">92394829</td>
            <td>08-22-2018</td>
            <td>34</td>
            <td>08-22-2018</td>
            <td>Kristie</td>
            <td>Genealogy</td>
            <td>9999999999</td>
            <td>Kristie</td>
            <td className="dots position-relative text-center"><span>...</span>
            <div>
                <span>Edit Call</span>
                <span>Convert to Case</span>
            </div></td>
          </tr>
        </tbody>
      </Table>
    </div>
      <div className="actions-with-pagination">
        <div className="pagination-section">
            <span className="light-grey">Show Rows: 
            </span> 10 <span className="records-page"> 1-10 of 138</span>
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
      </div>
    );
  }
}