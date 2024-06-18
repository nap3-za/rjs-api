import React, { useState, Fragment, useRef } from 'react';
// import { cookie } from "react-cookie";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { signUp } from "../../../redux_app/actions/account/actions";


function SignUpForm(props) {
	const [formData, setFormData] = useState({
		email: null,
		name: null,
		surname: null,
		gender: null,
		phone_number: null,
		password: null,
		password2: null,
	});
	const form = useRef(null);

	function handleFormSubmit(event) {
		event.preventDefault()
		props.loadingOn()
		props.signUp(formData)
		
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
			<form className="space-y-4 md:space-y-6" onSubmit={handleFormSubmit} ref={form}>
            	<div className="flex flex-col md:flex-row md:space-x-3">
            		<div className="flex flex-col space-y-3 w-full">
                		<div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                            <input type="text" name="name" id="name" placeholder="John" onChange={handleFormChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                        </div>

							<div>
                            <label htmlFor="surname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your surname</label>
                            <input type="text" name="surname" id="surname" placeholder="Doe" onChange={handleFormChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                        </div>

                        <div>
                        	<select name="gender" className="block py-3 my-1 w-full text-md font-medium text-gray-900 dark:text-white md:mt-6">
                        		<option value="">Gender</option>
                        		{/* Loop genders from constants */}
                        		<option value="MLE">Male</option>
                        		<option value="FML">Female</option>
                        		<option value="NBN">Non-binary</option>
                    		</select>
                        </div>


            		</div>

            		<div className="flex flex-col space-y-3 w-full">

							<div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input name="email" type="email" placeholder="johndoe@example.com" id="email" onChange={handleFormChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                        </div>

            			<div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" onChange={handleFormChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                        </div>

                        <div>
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="password" name="password2" id="confirm-password" placeholder="••••••••" onChange={handleFormChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                        </div>
            		</div>
            	</div>

    	        <div className="flex flex-row items-center space-x-2 ">
                    <input type="checkbox" id="Accept" className="checkbox-input" onChange={handleFormChange} required={true}/>
                	<label htmlFor="Accept" className="text-sm font-medium">
                		I accept to Advanced Management Systems's <Link to="/" className="font-medium text-primary-600 underline dark:text-primary-500">Privacy Policy</Link> and <Link to="/" className="font-medium text-primary-600 underline dark:text-primary-500">Terms of Use</Link>
                	</label>
            	</div>
                    
                <div className="flex flex-col items-center">
                    <button type="submit" onClick={handleFormSubmit} className="w-36 text-white bg-primary hover:bg-medHighPrimary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">Sign in</button>
                </div>
            </form>

            <div className="card-footer">
                Already have an account? <Link to="/" className="underline">Sign-in</Link>
            </div>
        </Fragment>
	)
}


SignUpForm.propTypes = {
	authenticated: PropTypes.bool,
	signUp: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
	authenticated: state.account.authenticated,
})


export default connect(mapStateToProps, { signUp })(SignUpForm);