import React, {Component} from 'react';
import {steps} from "../logic/constants";

class ThirdStep extends Component {
	success_form = () => {
		let result = {
			user_data: {
				...this.props.result
			}
		};

		console.log(JSON.stringify(result));
	};
	componentDidMount() {
		setTimeout(() => {
			this._animate.classList.remove("fadeIn");
		}, 500);
	}
	render() {
		let currentprogress = this.props.currentstep / steps * 100;
		return (
			<div className={'ThirdStep fadeIn'} ref={(node) => {this._animate = node;}}>
				<div className="progress">
					<p>thx for signup :)</p>
					<div className="line">
						<span style={{width: currentprogress + "%"}}></span>
					</div>
				</div>
				<div className="success">
					<p>&#10004;</p>
				</div>
				<div className="buttons">
					<button className={'nextstep'} onClick={e => this.success_form()}>Success</button>
				</div>
			</div>
		)
	}
}

export default ThirdStep;