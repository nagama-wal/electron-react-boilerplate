import React, { Component } from 'react';
import { pickupOptions, preneedOptions, prefixOptions, servicesOptions } from "../../../../Dashboard/variables";
import SelectComponent from '../../../../Dashboard/SelectComponent';
import { Collapse, Button, CardBody, Card, FormGroup, Input } from 'reactstrap';
import DatepickerComponent from '../../../../Dashboard/Datepicker'

export default class DecedentDetails extends Component {
  render() {
    return (
      <div>
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
                <DatepickerComponent placeholderText="DOB" />
            </FormGroup>
            <FormGroup className="mb-0">
                <DatepickerComponent placeholderText="DOD" />
            </FormGroup>
            <FormGroup className="mb-0">
                <SelectComponent placeholder="Ready for Pickup" options={pickupOptions}/>
            </FormGroup> 
            <FormGroup className="mb-0">
                <Input type="text" name="locationOfRemains" id="locationOfRemains" placeholder="Location of remains" />
            </FormGroup>
            <FormGroup className="mb-0">
                <SelectComponent placeholder="Is there an existing PreNeed" options={preneedOptions}/>
            </FormGroup>
            <FormGroup className="mb-0">
                <Input type="text" name="caseNumber" id="locationofremains" placeholder="Funeral Case Number" />
            </FormGroup>
            <FormGroup className="mb-0">
                <Input type="text" name="contractNumber" id="contractNumber" placeholder="Funeral Contract Number" />
            </FormGroup>
            <FormGroup className="mb-0">
                <SelectComponent placeholder="Required Services" options={servicesOptions}/>
            </FormGroup>
            <FormGroup className="mb-0 border-0 decedent-notes">
                <Input className="border-0" type="textarea" name="notesAtNeed" id="notesAtNeed" placeholder="Notes" />
            </FormGroup>
            <div className="view-notes">View All Notes</div>
        </section>
      </div>
    )
  }
}
