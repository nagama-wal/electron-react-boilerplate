import React, { Component } from 'react';
import { FormGroup, Input } from 'reactstrap';
import { assignedOptions, statusOptions, languageOptions, locationOptions, prefixOptions } from '../../Dashboard/variables';
import SelectComponent from '../../Dashboard/SelectComponent';
import DatepickerComponent from '../../Dashboard/Datepicker'


export default class CallerInfo extends Component {
  render() {
    return (
    <div className="call-caller-info">
      <div className="call-info-container">
       <h6 className="color-green">Call info</h6>
        <section className="d-flex flex-wrap">
             <FormGroup className="mb-0">
                <SelectComponent placeholder="Call received at location" options={locationOptions}/>
            </FormGroup> 
            <FormGroup className="mb-0">
                <SelectComponent placeholder="Call status" options={statusOptions}/>
            </FormGroup>
            <FormGroup className="mb-0">
                <SelectComponent placeholder="Assigned to" options={assignedOptions}/>
            </FormGroup>
            <FormGroup className="mb-0">
                <DatepickerComponent placeholderText="Appointment Date & Time" />
            </FormGroup>
            <FormGroup className="mb-0">
                <Input type="text" name="onePortalID" id="onePortalID" placeholder="OnePortal ID" />
            </FormGroup>
        </section>
      </div>
      <div className="caller-info-container">
        <h6 className="color-green">Callers contact info</h6>
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
                <Input type="email" name="email" id="email" placeholder="Caller's Email" />
            </FormGroup>
            <FormGroup className="mb-0">
                 <SelectComponent placeholder="Language Preference" options={languageOptions}/>
            </FormGroup>
        </section>
      </div>
    </div>
    )
  }
}
