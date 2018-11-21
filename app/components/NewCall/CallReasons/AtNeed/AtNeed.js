import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, FormGroup, Input } from 'reactstrap';
import DecedentDetails from './DecedentDetails/DecedentDetails';
import CallerRelation from './CallerRelation/CallerRelation';
import InformantDetails from './InformantDetails/InformantDetails';


export default class AtNeed extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { 
            collapse: false,
            section1: false,
            section2: false,
            section3: false,
            section4: false
         };
    }

    toggle(id) {
        switch(id) {
            case "section1": this.setState({section1: !this.state.section1}); 
                            break;
            case "section2": this.setState({section2: !this.state.section2}); 
                            break;
            case "section3": this.setState({section3: !this.state.section3}); 
                            break;
            default:  this.setState({section4: !this.state.section4});
        }
      }

  render() {
    return (
      <div>

            <div className={"toggle-section " + (this.state.section1 ? 'collapsed' : 'closed')}>
                <p className="collapse-header">
                    <span id="section1" className="collpase-title" style={{ marginBottom: '1rem' }} onClick={()=> this.toggle("section1")}>
                        Decedent Details
                    </span>
                    { this.state.section1 ? 
                      <span className="float-right arrow-icon"><i className="fas fa-angle-down"></i></span>
                     : <span className="float-right arrow-icon"><i className="fas fa-angle-right"></i></span> }
                </p>
                    <Collapse isOpen={this.state.section1}>
                        <Card className="AN-block border-0">
                            <CardBody className="p-0">
                                <DecedentDetails/>
                            </CardBody>
                        </Card>
                    </Collapse> 
            </div>
            <div className={"toggle-section " + (this.state.section2 ? 'collapsed' : 'closed')}>
                 <p className="collapse-header">
                    <span id="section2" className="collpase-title" style={{ marginBottom: '1rem' }} onClick={()=> this.toggle("section2")}>
                        Caller relation to decedent
                    </span>
                    { this.state.section2 ? 
                      <span className="float-right arrow-icon"><i className="fas fa-angle-down"></i></span>
                     : <span className="float-right arrow-icon"><i className="fas fa-angle-right"></i></span> }
                </p>
                <Collapse isOpen={this.state.section2}>
                        <Card className="AN-block border-0">
                            <CardBody className="p-0">
                              <CallerRelation/>
                            </CardBody>
                        </Card>
                    </Collapse> 
            </div>
            <div className={"toggle-section " + (this.state.section3 ? 'collapsed' : 'closed')}>
                <p className="collapse-header">
                    <span id="section3" className="collpase-title" style={{ marginBottom: '1rem' }} onClick={()=> this.toggle("section3")}>
                         Informant contact info
                    </span>
                    { this.state.section3 ? 
                      <span className="float-right arrow-icon"><i className="fas fa-angle-down"></i></span>
                     : <span className="float-right arrow-icon"><i className="fas fa-angle-right"></i></span> }
                </p>
                <Collapse isOpen={this.state.section3}>
                        <Card className="AN-block border-0">
                            <CardBody className="p-0">
                                <InformantDetails/>
                            </CardBody>
                        </Card>
                    </Collapse> 
            </div>
            <div className={"toggle-section " + (this.state.section4 ? 'is-collapsed' : 'is-closed')}>
                <p className="collapse-header">
                    <span id="section4" className="collpase-title" style={{ marginBottom: '1rem' }} onClick={()=> this.toggle("section4")}>
                        Email for family arrangement assistant 
                    </span>
                    { this.state.section4 ? 
                      <span className="float-right arrow-icon"><i className="fas fa-angle-down"></i></span>
                     : <span className="float-right arrow-icon"><i className="fas fa-angle-right"></i></span> }
                </p>
                <Collapse isOpen={this.state.section4}>
                        <Card className="AN-block border-0">
                            <CardBody className="p-0">
                            <section className="d-flex flex-wrap">
                                <FormGroup className="mb-0">
                                    <Input type="email" name="email" id="email" placeholder="Email id" /> 
                                </FormGroup>
                            </section>
                            </CardBody>
                        </Card>
                    </Collapse> 
            </div>


      </div>
    )
  }
}
