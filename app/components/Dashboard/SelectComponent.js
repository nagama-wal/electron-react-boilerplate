import React from 'react';
import Select from 'react-select';

class SelectComponent extends React.Component {
    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }
    
    render() {
        console.log(this.props)
    const { selectedOption } = this.state;

        return (
            <div className="select-wrapper">
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={this.props.options}
                    placeholder ={this.props.placeholder}
                    isSearchable ={false}
                    classNamePrefix="select-dropdown" 
                />
            </div>
        )
    }   
}
export default SelectComponent