import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import InputGroup from 'react-bootstrap/InputGroup';

// import LogoutIcon from "@material-ui/icons/Logout";

import {
	URL_SIGN_IN,
	URL_SIGN_OUT,
} from "../../AppUrls";
import { BRAND_NAME_SHORT } from "../../Constants";

import BrandLogo from "../../media/icon.png";

function Header(props) {

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<Navbar expand="lg" className="bg-body-tertiary mb-3 py-1" sticky="top">
			<Container fluid>
				<Link to="/" className="">
					<Navbar.Brand className="d-flex align-items-center fw-bold">
						<img src={BrandLogo} style={{"height":"50px", "width":"50px"}}/>
						{BRAND_NAME_SHORT}
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-lg`}
					aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
							Offcanvas
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>

						<div className="d-flex flex-grow-1 justify-content-center" >
							<Form className="d-flex">
								<InputGroup className="">
									<Form.Control placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon2"
									/>
									<Button variant="outline-secondary" id="button-addon2">
										Search
									</Button>
								</InputGroup>
							</Form>
						</div>

						<Nav className="pe-3">
							<Nav.Link href="#action1">Home</Nav.Link>
							<Nav.Link href="#action2">Link</Nav.Link>
							<NavDropdown
								title="Dropdown"
								id={`offcanvasNavbarDropdown-expand-lg`}
							>
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item>
									<Link to={URL_SIGN_OUT}>
										Logout
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">
									Something else here
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>

					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
}
 

export default Header;
