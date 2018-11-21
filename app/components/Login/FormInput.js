import React, { Component } from 'react';
import { Input, Label, FormGroup } from 'reactstrap';
import cx from 'classnames';


class FormInput extends Component {
	constructor(props){
		super(props)

		this.state = {
			focused: false
		}

		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleFocus(event){
		this.setState({
			focused: true,
		})
	}

	handleBlur(event){
		this.setState({
			focused: false,
		})
	}

	render() {
		const { type, value, onChange, label, disabled, error, 
			className, labelClass} =  this.props
		return (
			<React.Fragment>
				<FormGroup className={className}>
					<Input type={type || "text"} className={cx("form-control", {
						"field-focus": this.state.focused || !!value,
					})} disabled={disabled}
						value={value}
						onChange={onChange}
						onFocus={this.handleFocus}
						onBlur={this.handleBlur}
					/>
					<Label className={labelClass}>{label}</Label>
				</FormGroup>
				{
					error ? 
					(<div className="error-msg">{error}</div>) : null
				}
			</React.Fragment>
		)
	}
}

export default FormInput;