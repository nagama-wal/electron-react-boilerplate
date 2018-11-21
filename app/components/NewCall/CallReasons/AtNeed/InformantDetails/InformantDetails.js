import React, { Component } from 'react';
import { prefixOptions } from "../../../../Dashboard/variables";
import SelectComponent from '../../../../Dashboard/SelectComponent';
import { FormGroup, Input } from 'reactstrap';
import  Btncheckbox from "../../../../btnCheckBox/btnCheckBox";


export default class InformantDetails extends Component {
  render() {
    return (
      <div>
            <FormGroup className="mb-0 w-100">
            <Btncheckbox/> <label className="checkbox-label">Same as caller</label>
            </FormGroup>
         <section className="d-flex flex-wrap">
            <FormGroup className="mb-0">
                <SelectComponent placeholder="Caller’s Prefix" options={prefixOptions}/>
            </FormGroup>
            <FormGroup className="mb-0">
                <Input type="text" name="callersFirstName" id="callersFirstName" placeholder="Caller’s First Name" />
            </FormGroup>
            <FormGroup className="mb-0">
                <Input type="text" name="callersMiddleName" id="callersMiddleName" placeholder="Caller’s Middle Name" />
            </FormGroup>
            <FormGroup className="mb-0">
                <Input type="text" name="callersLastName" id="callersLastName" placeholder="Caller’s Last Name" />
            </FormGroup>
            <FormGroup className="mb-0">
                <Input type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone number" />
            </FormGroup>
            <FormGroup className="mb-0">
                <Input type="email" name="email" id="email" placeholder="Callers Email" />
            </FormGroup>
            <FormGroup className="mb-0">
                <Input type="text" name="relation" id="relation" placeholder="Relation" />
            </FormGroup>
        </section>
      </div>
    )
  }
}
