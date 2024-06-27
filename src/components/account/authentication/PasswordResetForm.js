import React, { useState, Fragment, useRef } from 'react';
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { passwordReset } from "../../../redux_app/actions/account/actions";

import {
	URL_SIGN_IN,
	URL_SIGN_UP,
} from "../../../AppUrls";


function PasswordResetForm(props) {
	const [formData, setFormData] = useState({
		email: null,
	});

	const form = useRef(null)
	const { authenticated } = props

	function handleFormSubmit(event) {
		event.preventDefault()
		props.passwordReset(formData);
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
		<Card>
			<Card.Header as="h4" className="d-flex justify-content-center py-3 fw-bold">
				Password Reset
			</Card.Header>
			<Card.Body>
				<Form onSubmit={handleFormSubmit} ref={form}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="johndoe@email.com" onChange={handleFormChange} required={true}/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
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
				<Link to={URL_SIGN_IN} className="px-1">Sign In</Link>
				<Link to={URL_SIGN_UP}  className="px-1">Sign Up</Link>
			</Card.Footer>
		</Card>
	)
}

PasswordResetForm.propTypes = {
	authenticated: PropTypes.bool,
	passwordReset: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
	authenticated: state.account.authenticated,
})

export default connect(mapStateToProps, { passwordReset })(PasswordResetForm);

