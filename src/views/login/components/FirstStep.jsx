import React, {Component} from 'react';
import {steps} from "../logic/constants";



class FirstStep extends Component {
	validation = (e) => {
		e.preventDefault();
		let errors = 0;
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if(!re.test(String(e.target.email.value).toLowerCase())){
			e.target.email.parentElement.getElementsByTagName('p')[0].innerHTML = ('invalid');
			e.target.email.parentElement.getElementsByTagName('p')[0].className += " error";
			errors++;
		}
		if(e.target.password.value.length < 6 ){
			e.target.password.parentElement.getElementsByTagName('p')[0].innerHTML = ('invalid');
			e.target.password.parentElement.getElementsByTagName('p')[0].className += " error";
			errors++;
		}
		if(e.target.password.value !== e.target.repassword.value){
			e.target.repassword.parentElement.getElementsByTagName('p')[0].innerHTML = ('invalid');
			e.target.repassword.parentElement.getElementsByTagName('p')[0].className += " error";
			errors++;
		}

		if(errors === 0){
			this._animate.classList.add("fadeOut");
			let email = e.target.email.value;
			let password = e.target.password.value
			setTimeout(() => {
				// debugger;
				this.props.nextstep(this.props.currentstep + 1);
				this.props.save('email', email);
				this.props.save('password', password);
			}, 500);
		}
	};
	componentDidMount() {
		setTimeout(() => {
			this._animate.classList.remove("fadeIn");
		}, 500);
	}
	render() {
		let email = '';
		if(typeof this.props.email !== 'undefined'){
			email = this.props.email;
		}
		let password = '';
		if(typeof this.props.password !== 'undefined'){
			password = this.props.password;
		}
		let currentprogress = this.props.currentstep / steps * 100;
		return (
			<div className={'firststep fadeIn'} ref={(node) => {this._animate = node;}}>
				<div className="progress">
					<p>SignUp</p>
					<div className="line">
						<span style={{width: currentprogress + "%"}}></span>
					</div>
				</div>
				<form method={'POST'} onSubmit={e => this.validation(e)} id={'firstStep'}>
					<label><p>Email</p><input type="email" id="email" defaultValue={email}  required /></label>
					<label><p>password</p><input id={'password'} type="password" defaultValue={password} required /></label>
					<label><p>confirm</p><input id={'repassword'} type="password" defaultValue={password} required /></label>
					<div className="buttons">
						<button className={'nextstep'} type={'submit'}>Next</button>
					</div>
				</form>
			</div>
		)
	}
}

export default FirstStep;