import React, { useState, Fragment, useRef } from 'react';
// import { cookie } from "react-cookie";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { signUp } from "../../../redux_app/actions/account/actions";


function SignUpForm(props) {
	const [formData, setFormData] = useState({
		name: null,
		surname: null,
		gender: null,

		username: null,
		email: null,

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
			<div className="flex flex-col w-full p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl">
			    <div className="flex flex-row gap-3 pb-4">
			        <div>
			            <img src="/favicon.svg" width="50" alt="Logo"></img>
			        </div>
			         <h1 className="text-3xl font-bold text-[#4B5563] text-[#4B5563] my-auto">Your Company</h1>

			    </div>
			    <div className="text-sm font-light text-[#6B7280] pb-8 ">Sign Up to your account on Your Company.</div>
			    
			    <form className="flex flex-col" onSubmit={handleFormSubmit} ref={form}>
			        <div className="col-md-row pb-6 md:space-x-3">
						<div className="form-input-container">
					        <div>
					            <label for="name" className="text-input-label">Name</label>
					            <div className="relative text-gray-400">
					                <input type="name" name="name" id="name" className="text-input" placeholder="John" autocomplete="off" onChange={handleFormChange} required={true}/>
					            </div>
					        </div>	

					        <div>
					            <label for="surname" className="text-input-label">Surname</label>
					            <div className="relative text-gray-400">
					                <input type="surname" name="name" id="surname" className="text-input" placeholder="Doe" autocomplete="off" onChange={handleFormChange} required={true}/>
					            </div>
					        </div>	

	                        <div>
	                        	<select name="gender" className="select-input">
	                        		<option value="">Gender</option>
	                        		<option value="MLE">Male</option>
	                        		<option value="FML">Female</option>
	                        		<option value="NBN">Non-binary</option>
	                    		</select>
	                        </div>
						</div>

	            		<div className="form-input-container">
					        <div>
					            <label for="email" className="text-input-label">Email</label>
					            <div className="relative text-gray-400">
					                <input type="email" name="email" id="email" className="text-input" placeholder="johndoe@email.com" autocomplete="off" onChange={handleFormChange} required={true}/>
					            </div>
					        </div>	
	            			<div>
	                            <label htmlFor="password" className="text-input-label">Password</label>
	                            <div className="relative text-gray-400">
	                            	<input type="password" name="password" id="password" className="text-input" placeholder="••••••••" autocomplete="off" onChange={handleFormChange} required={true} />
	                        	</div>
	                        </div>

	                        <div>
	                            <label htmlFor="confirm-password" className="text-input-label">Confirm password</label>
	                            <div className="relative text-gray-400">
	                            	<input type="password" name="password2" id="confirm-password" className="text-input" placeholder="••••••••" autocomplete="off" onChange={handleFormChange} required={true} />
	                        	</div>
	                        </div>	
	            		</div>
					</div>						

			        <button type="submit" className="btn-submit" onChange={handleFormSubmit}>
			        	Sign Up
			        </button>

			        <div className="text-sm font-light text-[#6B7280] ">
			        	Don't have an accout yet? <Link to="/sign-in/" className="text-link">Sign In</Link>
			        </div>
			    </form>

			    <div className="relative flex py-6 items-center">
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


SignUpForm.propTypes = {
	authenticated: PropTypes.bool,
	signUp: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
	authenticated: state.account.authenticated,
})


export default connect(mapStateToProps, { signUp })(SignUpForm);