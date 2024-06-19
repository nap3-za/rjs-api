import React, { useState, Fragment, useRef } from 'react';
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

	if (props.authenticated) {
		return <Navigate to="/" />
	}

	return (
        <Fragment>
			<div className="flex flex-col w-full p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl">
			    <div className="flex flex-row gap-3 pb-4">
			        <div>
			            <img src="/favicon.svg" width="50" alt="Logo"></img>
			        </div>
			         <h1 className="text-3xl font-bold text-[#4B5563] text-[#4B5563] my-auto">Your Company</h1>

			    </div>
			    <div className="text-sm font-light text-[#6B7280] pb-8 ">Login to your account on Your Company.</div>
			    <form className="flex flex-col" onSubmit={handleFormSubmit} ref={form}>
			        <div className="pb-2">
			            <label for="username" className="block mb-2 text-sm font-medium text-[#111827]">Email</label>
			            <div className="relative text-gray-400">
			            	<span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
			            		IC
			            	</span>
			                <input type="username" name="username" id="username" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="name@company.com" autocomplete="off" onChange={handleFormChange} required={true}/>
			            </div>
			        </div>
			        <div className="pb-6">
			            <label for="password" className="block mb-2 text-sm font-medium text-[#111827]">Password</label>
			            <div className="relative text-gray-400">            	
			            	<span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
			            		IC
			            	</span>
			            	<input type="password" name="password" id="password" placeholder="••••••••••" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autocomplete="new-password" onChange={handleFormChange} required={true}/>
			            </div>
			        </div>
			        <button type="submit" className="w-full text-[#FFFFFF] bg-[#030712] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6" onChange={handleFormSubmit}>Login</button>
			        <div className="text-sm font-light text-[#6B7280] ">
			        	Don't have an accout yet? <Link to="#" className="font-medium text-[#030712] hover:underline">Sign Up</Link>
			        </div>
			    </form>

			    <div className="relative flex py-8 items-center">
			        <div className="flex-grow border-t border-[1px] border-gray-200"></div> <span className="flex-shrink mx-4 font-medium text-gray-500">OR</span> 
			        <div className="flex-grow border-t border-[1px] border-gray-200"></div>
			    </div>

			    <form>
			        <div className="flex flex-row gap-2 justify-center">
			            <button className="flex flex-row w-32 gap-2 bg-gray-600 p-2 rounded-md text-gray-200">
			                <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
			            		IC
			            	</span>
			            	<span className="font-medium mx-auto">Github</span>

			            </button>
			            <button className="flex flex-row w-32 gap-2 bg-gray-600 p-2 rounded-md text-gray-200">
			                <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
			            		IC
			            	</span>
			            	<span className="font-medium mx-auto">Github</span>
			            </button>
			        </div>
			    </form>
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

