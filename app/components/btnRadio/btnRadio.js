import React, { Component } from 'react'
import { FormGroup, Label, Input } from 'reactstrap';


export default class Btnradio extends Component {
    render() {
        return (
            <FormGroup className="custom-radio">
                <Label className="radio-inline d-flex align-items-center justify-content-start">
                    <Input type="radio"/>
                    <span>
                        <i className="fas fa-circle"></i>
                    </span> 
                    {/* Your Text Here */}
                </Label>
            </FormGroup>
        )
    }
}