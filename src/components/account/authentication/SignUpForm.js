import React, { useState, Fragment, useRef } from 'react';
// import { cookie } from "react-cookie";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import { signUp } from "../../../redux_app/actions/account/actions";
import {
	URL_SIGN_IN,
	URL_PASSWORD_RESET,
} from "../../../AppUrls";

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

		<Card>
			<Card.Header as="h4" className="d-flex justify-content-center py-3 fw-bold">
				Sign Up
			</Card.Header>
			<Card.Body>
				<Form onSubmit={handleFormSubmit} ref={form}>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="formGridName">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="John" name="name" onChange={handleFormChange} required={true}/>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridSurname">
							<Form.Label>Surname</Form.Label>
							<Form.Control type="text" placeholder="Doe" name="surname" onChange={handleFormChange} required={true} />
						</Form.Group>
					</Row>

					<Row className="mb-3">
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="johndoe@email.com" name="email" onChange={handleFormChange} required={true}/>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridGender">
							<Form.Label>Gender</Form.Label>
						    <Form.Select aria-label="Default select example" name="gender" onChange={handleFormChange} required={true} >								<option value="MLE">Male</option>
								<option value="FML">Female</option>
								<option value="NBN">Non-binary</option>
						    </Form.Select>
						</Form.Group>
					</Row>

					<Form.Group  controlId="formGridUsername" className="mb-3">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" placeholder="JohnDoe001" name="username" onChange={handleFormChange} required={true} />
					</Form.Group>


					<Row className="mb-3">
						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="••••••••••" name="password" onChange={handleFormChange} required={true} />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword2">
							<Form.Label>Cofnirm password</Form.Label>
							<Form.Control type="password" placeholder="••••••••••" name="password2" onChange={handleFormChange} required={true} />
						</Form.Group>
					</Row>


					<Form.Group className="mb-3" id="formGridCheckbox">
						<Form.Check type="checkbox" label="I accept T's&C's" />
					</Form.Group>

					<div className="d-flex justify-content-center">
						<Button variant="primary" type="submit" onChange={handleFormSubmit}>
							Submit
						</Button>
					</div>
				</Form>					
			</Card.Body>

			<Card.Footer>
				<Link to={URL_SIGN_IN} className="px-1">Sign In</Link>
				<Link to={URL_PASSWORD_RESET} className="px-1">Forgot Password</Link>
			</Card.Footer>
		</Card>

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