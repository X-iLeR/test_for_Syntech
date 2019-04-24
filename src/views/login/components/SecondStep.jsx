import React, {Component} from 'react';
import {steps} from "../logic/constants";

class SecondStep extends Component {
	validation = (e) => {
		e.preventDefault();
		let errors = 0;
		let date = e.target.year.value + "-" + e.target.month.value + "-" + e.target.day.value;
		let validate_date = new Date(date).getDate();
		let current_date = parseInt(e.target.day.value);
		let tequila_year = new Date().getFullYear() - 18; // :)
		if(current_date != validate_date){
			e.target.day.parentElement.getElementsByTagName('span')[0].innerHTML = ('Invalid birth date');
			e.target.day.parentElement.getElementsByTagName('span')[0].className += " error";
			errors++;
		}else if(parseInt(e.target.year.value) > tequila_year) {
			e.target.day.parentElement.getElementsByTagName('span')[0].innerHTML = ('You must be 18 years at least');
			e.target.day.parentElement.getElementsByTagName('span')[0].className += " error";
			errors++;
		}
		if(!e.target.querySelector('input[name="gender"]:checked')){
			e.target.male.parentElement.getElementsByTagName('p')[0].innerHTML = ('Gender must be checked');
			e.target.male.parentElement.getElementsByTagName('p')[0].className += " error";
			errors++;
		}

		if(errors === 0){
			let date_of_birth = new Date(date).getTime()/1000;
			this.props.nextstep(this.props.currentstep + 1);
			this.props.save('date_of_birth', date_of_birth);
			this.props.save('gender', e.target.querySelector('input[name="gender"]:checked').value);
			this.props.save('how_hear_about_us', e.target.querySelector('input[name="gender"]:checked').value);
		}
	};
	componentDidMount() {
		setTimeout(() => {
			this._animate.classList.remove("fadeIn");
		}, 500);
	}

	render() {
		let currentprogress = this.props.currentstep / steps * 100;
		let date_of_birth = '', day = '', month = '', year = '';
		if(typeof this.props.date_of_birth !== 'undefined'){
			date_of_birth = new Date(this.props.date_of_birth);
			day = date_of_birth.getDate();
			month = date_of_birth.getMonth();
			year = date_of_birth.getFullYear();
		}
		let gender = 'uns';
		if(typeof this.props.gender !== 'undefined'){
			gender = this.props.gender;
		}
		let how_hear_about_us = '1';
		if(typeof this.props.how_hear_about_us !== 'undefined'){
			how_hear_about_us = this.props.how_hear_about_us;
		}
		return (
			<div className={'secondstep fadeIn'} ref={(node) => {this._animate = node;}}>
				<div className="progress">
					<p>SignUp</p>
					<div className="line">
						<span style={{width: currentprogress + "%"}}>&nbsp;</span>
					</div>
				</div>
				<form method={'POST'} onSubmit={this.validation}>
					<div className="group">
						<label><span>Date of birth</span><input type="number" id={'day'} placeholder={'DD'} defaultValue={day} required/></label>
						<input type="number" placeholder={"MM"} id={'month'} defaultValue={month} required/>
						<input type="number" placeholder={"YYYY"} id={'year'} defaultValue={year} required/>
					</div>
					<div className="group">
						<p>GENDER</p>
						<input type="radio" id={'male'} name={'gender'} value={'male'} defaultChecked={'male' === gender? "checked" : false} required/><label htmlFor="male">Male</label>
						<input type="radio" id={'female'} name={'gender'} value={'female'} defaultChecked={'female' === gender? "checked" : false} required/><label htmlFor="female">FEMale</label>
						<input type="radio" id={'uns'} name={'gender'} value={'uns'} defaultChecked={'uns' === gender? "checked" : false} required/><label htmlFor="uns">Uns</label>
					</div>
					<div className="about">
						<p>About</p>
						<select name="about" defaultValue={how_hear_about_us}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
					<div className="buttons">
						<button onClick={() => this.props.prevstep(this.props.currentstep - 1)}>Back</button>
						<button type={'submit'} className={'nextstep'}>Next</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SecondStep;