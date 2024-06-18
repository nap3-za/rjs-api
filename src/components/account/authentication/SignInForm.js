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
		props.signIn(formData.username, formData.password);
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

            <form className="space-y-4 md:space-y-6" ref={form} onSubmit={handleFormSubmit}>
               	<div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone number</label>
                    <input type="text" onChange={handleFormChange}  placeholder="076..." name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" onChange={handleFormChange} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="">Remember me</label>
                        </div>
                    </div>
                    <Link to={URL_FORGOT_PASSWORD} className="text-sm font-medium underline dark:text-primary-500">Forgot password?</Link>
                </div>

                <div className="flex flex-col items-center">
                    <button type="submit" className="w-36 text-white bg-primary hover:bg-medHighPrimary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">Sign in</button>
                </div>
            </form>

            <div className="card-footer">
                Don't have an account? <Link to={URL_SIGN_UP} className="underline">Sign-up</Link>
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

