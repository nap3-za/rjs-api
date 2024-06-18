import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SignUpForm from "../../../components/account/authentication/SignUpForm";


function SignUp(props) {
    
	return (
        <Fragment>
            <section className="flex flex-col justify-center items-center bg-light py-12 md:py-0">
                <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[50%]">
                    <SignUpForm />
                </div>
            </section>
        </Fragment>
	)
}


export default SignUp;
