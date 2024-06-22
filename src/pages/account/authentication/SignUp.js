import React, { Fragment } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SignUpForm from "../../../components/account/authentication/SignUpForm";


function SignUp(props) {
    
	return (
        <Row className="justify-content-center pt-5">
            <Col xs sm="10" md="6" lg="6">
                <SignUpForm />
            </Col>
        </Row>
	)
}


export default SignUp;
