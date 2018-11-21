import React, { Component } from "react";
import CallerInfo from "./CallerInfo/CallerInfo";
import CallReasons from "./CallReasons/CallReasons";
import { Button } from "reactstrap";

class NewCall extends Component {
    handleSubmit () {

    }
    render () {
        return (
            <div>
                <section className="allcalls-section">
                    <div className="title-wrapper">
                        <i className="fas fa-home home-icon"/>
                        <i className="fas fa-chevron-right next-icon"/>
                        <span>Call/Leads - New Call</span>
                    </div>
                    <h1>New Call</h1>
                    <form onSubmit={e => {
                        e.preventDefault()
                        this.handleSubmit()
                        }}>
                        <CallerInfo/>
                        <CallReasons/>
                        <div className="button-group text-right">
                            <Button type="submit" className="newcall-btn" >
                                Save
                            </Button>
                            <Button type="submit" className="newcall-btn" >
                                Submit
                            </Button>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}
export default NewCall