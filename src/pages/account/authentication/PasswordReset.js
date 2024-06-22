import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PasswordResetForm from "../../../components/account/authentication/PasswordResetForm";


function PasswordReset(props) {
    
	return (
        <Row className="justify-content-center pt-5">
            <Col xs sm="10" md="6" lg="4">
                <PasswordResetForm />
            </Col>
        </Row>
	)
}



export default PasswordReset;
