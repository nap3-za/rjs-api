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
		            	<div className="col-md-row md:space-x-3">

		            		<div className="form-input-container">
		                		<div>
		                            <label htmlFor="name" className="text-input-label">Your name</label>
		                            <input type="text" name="name" id="name" className="text-input" placeholder="John" onChange={handleFormChange} required={true} />
		                        </div>

								<div>
		                            <label htmlFor="surname" className="text-input-label">Your surname</label>
		                            <input type="text" name="surname" id="surname" className="text-input" placeholder="Doe" onChange={handleFormChange} required={true} />
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
		                            <label htmlFor="email" className="text-input-label">Your email</label>
		                            <input name="email" type="email" className="text-input" placeholder="johndoe@example.com" id="email" onChange={handleFormChange}  required={true} />
		                        </div>

		            			<div>
		                            <label htmlFor="password" className="text-input-label">Password</label>
		                            <input type="password" name="password" id="password" className="text-input" placeholder="••••••••" onChange={handleFormChange} required={true} />
		                        </div>

		                        <div>
		                            <label htmlFor="confirm-password" className="text-input-label">Confirm password</label>
		                            <input type="password" name="password2" id="confirm-password" className="text-input" placeholder="••••••••" onChange={handleFormChange} required={true} />
		                        </div>
		            		</div>
		            	</div>

		    	        <div className="fx-row items-center space-x-2 ">
		                    <input type="checkbox" id="accept" className="checkbox-input" onChange={handleFormChange} required={true}/>
		                	<label htmlFor="accept" className="text-sm font-medium">
		                		I accept to Advanced Management Systems's <Link to="/" className="text-link">Privacy Policy</Link> and <Link to="/" className="text-link">Terms of Use</Link>
		                	</label>
		            	</div>
		                    
		                <div className="fx-col items-center">
		                    <button type="submit" onClick={handleFormSubmit} className="">Sign in</button>
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


SignUpForm.propTypes = {
	authenticated: PropTypes.bool,
	signUp: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
	authenticated: state.account.authenticated,
})


export default connect(mapStateToProps, { signUp })(SignUpForm);