import React, { Component } from 'react';
import { relationOptions } from "../../../../Dashboard/variables";
import SelectComponent from '../../../../Dashboard/SelectComponent';
import { FormGroup, Input } from 'reactstrap';
import DatepickerComponent from '../../../../Dashboard/Datepicker'
import  Btncheckbox from "../../../../btnCheckBox/btnCheckBox";


export default class CallerRelation extends Component {
  render() {
    return (
      <div>
         <section className="d-flex flex-wrap">
            <FormGroup className="mb-0">
                <SelectComponent placeholder="Relation" options={relationOptions}/>
            </FormGroup>
            <FormGroup className="mb-0">
                 <Btncheckbox/> <label className="checkbox-label">NOK</label>
            </FormGroup>
        </section>
      </div>
    )
  }
}
