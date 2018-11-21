import React, {Component} from "react";
import  Btncheckbox  from '../../btnCheckBox/btnCheckBox';
// import SelectComponent from "../SelectComponent";
import {locationOptions} from '../variables'
import MultiSelector from "../../MultiSelector/MultiSelector";

class DashboardHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="header-wrapper">
                <div className="select-row-wrapper">                
                    <Btncheckbox/>
                </div>
                <div className="show-selected-checkbox">
                    <i className="fas fa-download selected-row-icon export-icon"></i>
                    <i className="fas fa-archive selected-row-icon"></i>
                    <i className="far fa-trash-alt selected-row-icon"></i>
                    <div className="selected-row-info">
                        <span>10 cases selected </span>
                        <span>Select All 2019 Calls and cases </span>
                    </div>
                </div>
                <div className="Location-dropdown">
                    <span>Location:</span>
                    <MultiSelector placeholder="Default" options = {locationOptions}/>
                </div>
            </div>
        );
    }
}

export default DashboardHeader;