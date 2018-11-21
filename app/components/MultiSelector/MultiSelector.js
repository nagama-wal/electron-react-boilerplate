import React, {Component} from 'react'
import StatefulMultiSelect from '@khanacademy/react-multi-select'
// import {actionOptions} from '../Dashboard/variables'

class MultiSelector extends Component {
    constructor() {
        super();
        this.state = {
            selected: [],
        };
    }
    handleSelectedChanged(selected) {
        this.setState({selected});
    }
    render() {
        return (
            <div className="multiselect-dropdown-container">
                <StatefulMultiSelect
                    overrideStrings={{
                        selectSomeItems: "All",
                        allItemsAreSelected: "All",
                        // selectAll: "Select All",
                        // search: "Search",
                        className:"multi-select-dropdown" 
                    }}
                    
                    onSelectedChanged={this.handleSelectedChanged.bind(this)}
                    selected={this.state.selected}
                    options ={this.props.options}
                    search= {false}
                    disableSearch={true}

                />
            </div>
        );
    }
}

export default MultiSelector;