import React, { Component } from 'react'
import { FormGroup, Label, Input } from 'reactstrap';


export default class Btncheckbox extends Component {
    render() {
        return (
            <FormGroup className="custom-check">
                <Label className="checkbox-inline d-flex align-items-center justify-content-start">
                    <Input type="checkbox"/>
                    <span>
                        <i className="facheck"></i>
                    </span> 
                    {/* Your Text Here */}
                </Label>
            </FormGroup>
        )
    }
}