import React, {Component} from 'react';
import {Provider} from "react-redux";
import store from "./logic/store";
import LoginForm from "./LoginForm";

class Login extends Component{
	render() {
		return(
			<Provider  store={store}>
				<LoginForm/>
			</Provider>
		)
	}
}

export default Login;
