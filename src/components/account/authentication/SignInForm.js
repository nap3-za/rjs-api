import React, { useState, Fragment, useRef } from 'react';
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { signIn } from "../../../redux_app/actions/account/actions";
import {
	URL_SIGN_UP,
	URL_PASSWORD_RESET,
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
	if (authenticated === true) {
		return <Navigate to="/" />
	}

	return (
		<Card>
		<Card.Header as="h4" className="d-flex justify-content-center py-3 fw-bold">
			Sign In
		</Card.Header>
		<Card.Body>
			<Form onSubmit={handleFormSubmit} ref={form}>
				<Form.Group className="mb-3" controlId="formBasicUsername">
					<Form.Label>Username</Form.Label>
					<Form.Control type="text" placeholder="johndoe001" name="username" onChange={handleFormChange} required={true}/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="••••••••••" name="password" onChange={handleFormChange} required={true}/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="I accept T's&C's" />
				</Form.Group>
				<div class="d-flex justify-content-center">
					<Button variant="primary" type="submit" onChange={handleFormSubmit}>
						Submit
					</Button>
				</div>
			</Form>					
		</Card.Body>

		<Card.Footer>
			<Link to={URL_SIGN_UP} className="px-1">Sign Up</Link>
			<Link to={URL_PASSWORD_RESET} className="px-1">Forgot Password</Link>
		</Card.Footer>
		</Card>
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

