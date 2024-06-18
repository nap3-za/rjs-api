import React, { useState, Fragment, useRef } from 'react';
import { cookie } from "react-cookie";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { signIn } from "../../../redux_app/actions/account/actions";
import {
	URL_SIGN_UP, 
	URL_FORGOT_PASSWORD
} from "../../../AppUrls";


function SignInForm(props) {
	const [formData, setFormData] = useState({
		username: null,
		password: null
	});

	const form = useRef(null)
	const { authenticated } = props

	function handleFormSubmit(event) {
		event.preventDefault()
		props.signIn(formData);
		clearForm();
	}

	function handleFormChange(event) {
		const { name, value } = event.target
		event.preventDefault();
		setFormData((prevState) => {
			return {
				...formData,
				[name]: value,
			};
		});
	};

	function clearForm() {
		form.current && form.current.reset();
	}

	return (
        <Fragment>
			<div className="card">
                <div className="card-header items-center text-4xl">
                    <div className="card-header-main">
                    	Lorem Ipsum Ltd
                    </div>
                    <div className="card-header-sub">
                    	Lorem ipsum dolor it edit comerts sis polog
                    </div>                    
                </div>

                <div className="card-body">
					<form className="form" onSubmit={handleFormSubmit} ref={form}>

	            		<div className="form-input-container">
							<div>
	                            <label htmlFor="username" className="text-input-label">Your username</label>
	                            <input name="username" type="username" className="text-input" placeholder="johndoe001" id="username" onChange={handleFormChange}  required={true} />
	                        </div>

	            			<div>
	                            <label htmlFor="password" className="text-input-label">Password</label>
	                            <input type="password" name="password" id="password" className="text-input" placeholder="••••••••" onChange={handleFormChange} required={true} />
	                        </div>
	            		</div>

		                <div className="fx-col items-center">
		                    <button type="submit" onClick={handleFormSubmit} className="">Sign In</button>
		                </div>
		            </form>
		        </div>

	            <div className="card-footer">
	                Already have an account? <Link to="/" className="text-link">Sign-in</Link>
	            </div>
	        </div>
        </Fragment>
	)
}

SignInForm.propTypes = {
	authenticated: PropTypes.bool,
	signIn: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
	authenticated: state.account.authenticated,
})

export default connect(mapStateToProps, { signIn })(SignInForm);

