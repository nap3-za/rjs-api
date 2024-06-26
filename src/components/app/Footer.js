import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

// import {
// 	URL_SIGN_OUT,
// } from "../../AppUrls";

import { BRAND_NAME_LONG } from "../../Constants";

function Footer(props) {

	return (
		<footer className="pt-5 px-4">
			<div className="row">
				<div className="col-6 col-md-2 mb-3">
					<h5>Section</h5>
					<ul className="nav flex-column">
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
					</ul>
				</div>

				<div className="col-6 col-md-2 mb-3">
					<h5>Section</h5>
					<ul className="nav flex-column">
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
					</ul>
				</div>

				<div className="col-6 col-md-2 mb-3">
					<h5>Section</h5>
					<ul className="nav flex-column">
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
					</ul>
				</div>

				<div className="col-md-5 offset-md-1 mb-3">
					<form>
						<h5>Subscribe to our newsletter</h5>
						<p>Monthly digest of what's new and exciting from us.</p>
						<div className="d-flex flex-column flex-sm-row w-100 gap-2">
							<label for="newsletter1" className="visually-hidden">Email address</label>
							<input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
							<button className="btn btn-primary" type="button">Subscribe</button>
						</div>
					</form>
				</div>
			</div>

			<div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
				<p>© 2024 {BRAND_NAME_LONG}, Inc. All rights reserved.</p>
				<ul className="list-unstyled d-flex">
					<li className="ms-3">
						<a className="link-body-emphasis" href="#">
							<GitHubIcon />
						</a>
					</li>
					<li className="ms-3">
						<a className="link-body-emphasis" href="#">
							<TwitterIcon />
						</a>
					</li>
					<li className="ms-3">
						<a className="link-body-emphasis" href="#">
							<InstagramIcon />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}


export default Footer;
