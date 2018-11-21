import React, { Component } from 'react'
import { Form, FormGroup, Input } from 'reactstrap';

export default class Search extends Component {
    render() {
        return (
            <React.Fragment>
                <Form className="custom-search">
                    <FormGroup>
                        <i className="fas fa-search"></i>
                        <Input type="search" name="basicSearch" id="basicSearch" placeholder="Search with Case ID, Decedant Name, etc" />
                    </FormGroup>
                </Form>
            </React.Fragment>
        )
    }
}
