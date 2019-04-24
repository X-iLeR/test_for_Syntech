import React, {Component} from 'react';
import {connect} from "react-redux";
import {add_field, NextStep} from "./logic/actions";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";


class LoginForm extends Component {
	render() {
		let {step, email, password, date_of_birth, gender, how_hear_about_us} = this.props;
		let show;
		let result = {email, password, date_of_birth, gender, how_hear_about_us};
		if (step === 2) {
			show = <SecondStep nextstep={this.next_step} save={this.save_data} prevstep={this.prev_step} currentstep={step} date_of_birth={date_of_birth} gender={gender} how_hear_about_us={how_hear_about_us}/>
		} else if (step === 3) {
			show = <ThirdStep nextstep={this.next_step} result={result} currentstep={step}/>
		} else {
			show = <FirstStep nextstep={this.next_step} save={this.save_data} currentstep={step} email={email} password={password}/>
		}


		return (
			<div className="login-form">
				{show}
			</div>
		)
	}

	next_step = (value) => {
		this.props.nextstep(value);
	};

	prev_step = (value) => {
		this.props.prevstep(value);
	};

	save_data = (name, value) => {
		this.props.savedata(name, value);
	}

}


function mapStateToProps(state) {
	return state
}

function mapDispatchToProps(dispatch) {
	return {
		nextstep: (value) => dispatch(NextStep(value)),
		prevstep: (value) => dispatch(NextStep(value)),
		savedata: (name, value) => dispatch(add_field(name, value)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);