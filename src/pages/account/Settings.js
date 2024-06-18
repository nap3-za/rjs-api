import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";

import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import EditIcon from "@material-ui/icons/Edit";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";


function Settings(props) {


	const [accountDetailsUpdateFormData, setAccountDetailsUpdateFormData] = useState({
		email: null,
		name: null,
		surname: null,
		physical_address: null,
		phone_number: null,
	});
	const [profileDetailsUpdateFormData, setProfileDetailsUpdateFormData] = useState({
		email: null,
		name: null,
		surname: null,
		physical_address: null,
		phone_number: null,	
	});

	const accountDetailsUpdateForm = useRef(null);
	const profileDetailsUpdateForm = useRef(null);

	const [showProfileDetailsUpdateModal, setShowProfileDetailsModal] =  useState(false)
    const [showAccountDetailsUpdateModal, setShowAccountDetailsUpdateModal] =  useState(false)

	// Update form togglers
  	function toggleProfileDetailsUpdateModal(event) {
        event.preventDefault()
        const { id } = event.target

        if (showProfileDetailsUpdateModal === true) {
            setShowProfileDetailsModal(false);
        } else {
            setShowProfileDetailsModal(true);              
        }
    }

  	function toggleAccountDetailsUpdateModal(event) {
        event.preventDefault()
        const { id } = event.target

        if (showAccountDetailsUpdateModal === true) {
            setShowAccountDetailsUpdateModal(false);
        } else {
            setShowAccountDetailsUpdateModal(true);              
        }
    }


	function handleProfileDetailsUpdateFormChange(event) {
		const { name, value } = event.target
		event.preventDefault();
		setProfileDetailsUpdateFormData((prevState) => {
			return {
				...profileDetailsUpdateFormData,
				[name]: value,
			};
		});
	};

	function handleAccountDetailsUpdateFormChange(event) {
		const { name, value } = event.target
		event.preventDefault();
		setAccountDetailsUpdateFormData((prevState) => {
			return {
				...accountDetailsUpdateFormData,
				[name]: value,
			};
		});
	};

    // Clears the passed form
	function clearForm(form) {
		form.current && form.current.reset();
	}

	// Update form submit handlers
	function handleProfileDetailsUpdateFormSubmit(event) {
		event.preventDefault();
		// props.signUp(formData, signUpToken.token);	
		
		clearForm(profileDetailsUpdateForm);
	}

	function handleAccountDetailsUpdateFormSubmit(event) {
		event.preventDefault();
		// props.signUp(formData, signUpToken.token);	
		
		clearForm(accountDetailsUpdateForm);
	}

    var AccountDetailsUpdateModal =
		<div
			className="modal fade"
			id="account-details-update-modal"
			tabIndex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
			style={{display: "none"}}
			>
			<div className="modal-dialog">
				<div className="w-full flex justify-center">
					<div className="card pt-0 w-[90%] mt-6 sm:w-[60%] md:w-[50%] lg:w-[35%]">

						<div className="modal-header-container ">
							<h5 className="modal-header " id="exampleModalLabel">
								Account Details Update
							</h5>
							<button type="button" className="modal-close-btn" data-bs-dismiss="modal" aria-label="Close">
								<CloseRoundedIcon fontSize="large"/>
							</button>
						</div>

						<div className="modal-body py-0 my-0">

		                   <form className="space-y-4 md:space-y-6" onSubmit={handleAccountDetailsUpdateFormSubmit} ref={accountDetailsUpdateForm}>
		                        <div>
		                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
		                            	Your name
		                            </label>
		                            <input type="text" name="name" value="Sir Nape Ntsoane ||" onChange={handleAccountDetailsUpdateFormChange} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
		                        </div>
       							
       							<div>
	                                <label for="surname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
	                                	Your surname
	                                </label>
	                                <input type="text" name="surname" id="surname" onChange={handleAccountDetailsUpdateFormChange} placeholder="Doe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
	                            </div>

		                        <div>
		                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
		                            	Your email
		                            </label>
		                            <input type="email" name="email" id="email" onChange={handleAccountDetailsUpdateFormChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeHolder="name@email.com" required="" />
		                        </div>

		                        <div>
		                            <label for="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
		                            	Your phone number
		                            </label>
		                            <input type="text" name="phone-number" value="Sir Nape Ntsoane ||" onChange={handleAccountDetailsUpdateFormChange} id="phone-number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
		                        </div>

		                        <div>
		                            <label for="physical-address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
		                            	Your physical address
		                            </label>
		                            <input type="text" name="physical-address" value="Sir Nape Ntsoane ||" id="physical-address" onChange={handleAccountDetailsUpdateFormChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
		                        </div>


		                        <div className="flex flex-col items-center">
		                            <button type="submit" className="w-36 text-white bg-primary hover:bg-medHighPrimary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">
		                            	Save
		                            </button>
		                        </div>
		                    </form> 
			        	</div>
					</div>
				</div>
			</div>
		</div>

    var ProfileDetailsUpdateModal =
		<div
			className="modal fade"
			id="profile-details-update-modal"
			tabIndex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
			style={{display: "none"}}
			>
			<div className="modal-dialog">
				<div className="w-full flex justify-center">
					<div className="card pt-0 w-[90%] mt-6 sm:w-[60%] md:w-[50%] lg:w-[35%]">

						<div className="modal-header-container ">
							<h5 className="modal-header " id="exampleModalLabel">
								Profile Details Update
							</h5>
							<button type="button" className="modal-close-btn" data-bs-dismiss="modal" aria-label="Close">
								<CloseRoundedIcon fontSize="large"/>
							</button>
						</div>

						<div className="modal-body py-0 my-0">

		                   <form className="space-y-4 md:space-y-6" onSubmit={handleProfileDetailsUpdateFormSubmit} ref={profileDetailsUpdateForm}>
		                        <div>
		                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
		                            	Your name
		                            </label>
		                            <input type="text" name="name" value="Sir Nape Ntsoane ||" onChange={handleProfileDetailsUpdateFormChange} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
		                        </div>
       							
       							<div>
	                                <label for="surname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
	                                	Your surname
	                                </label>
	                                <input type="text" name="surname" id="surname" placeholder="Doe" onChange={handleProfileDetailsUpdateFormChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
	                            </div>

		                        <div>
		                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
		                            	Your email
		                            </label>
		                            <input type="email" name="email" id="email" onChange={handleProfileDetailsUpdateFormChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeHolder="name@email.com" required="" />
		                        </div>

		                        <div>
		                            <label for="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
		                            	Your phone number
		                            </label>
		                            <input type="text" name="phone-number" value="Sir Nape Ntsoane ||" id="phone-number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
		                        </div>

		                        <div>
		                            <label for="physical-address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
		                            	Your physical address
		                            </label>
		                            <input type="text" name="physical-address" value="Sir Nape Ntsoane ||" id="physical-address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
		                        </div>


		                        <div className="flex flex-col items-center">
		                            <button type="submit" className="w-36 text-white bg-primary hover:bg-medHighPrimary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">
		                            	Save
		                            </button>
		                        </div>
		                    </form> 
			        	</div>
					</div>
				</div>
			</div>
		</div>



	return (
        <div className="">
        	<div className="flex flex-row items-center justify-start">
	        	<Link to="../settings" className="page-title">
	        		<p className="text-muted">
		        		Settings
		        	</p>
	        	</Link>

		        <p className="page-title">/</p>

	        	<Link to="/" className="page-title">
	        		<p className="text-muted">
		        		Account
		        	</p>
	        	</Link>

        	</div>

        	<div className="flex flex-col w-full justify-center items-center space-y-6">
	        	<div className="flex flex-col w-full justify-evenly space-y-6 md:space-x-6 md:flex-row md:space-y-0">
		        		<div className="card">
		        			<div className="card-header flex-row items-center justify-between">
		        				<p className="text-lg text-muted">
		        					Account Details
		        				</p>

			    				<button 
									data-bs-toggle="modal"
			                    	onClick={toggleAccountDetailsUpdateModal}
			                    	data-bs-target={"#account-details-update-modal"}
			   						className="btn"
			   						>
			   							<EditIcon />
			   					</button> 
		        			</div>

		        			<div className="card-body pr-0">
		        				<div className="flex flex-row w-full">
		        					<div className="flex flex-col text-sm space-y-2 w-[50%]">
		        						<p>Name</p>
		        						<p>Surname</p>
		        						<p>Email</p>
		        						<p>Phone number</p>
		        					</div>

		        					<div className="flex flex-col text-sm space-y-2 w-[50%]">
		        						<p>: John</p>
		        						<p>: Doe</p>
		        						<p>: johndoe@email.com</p>
		        						<p>: 071 506 0478</p>						
		        					</div>
		        				</div>
		        			</div>
		        		</div>

		        		<div className="card">
		        			<div className="card-header flex-row items-center justify-between">
		        				<p className="text-lg text-muted">
		        					Profile Info
		        				</p>

			    				<button 
									data-bs-toggle="modal"
			                    	onClick={toggleProfileDetailsUpdateModal}
			                    	data-bs-target={"#profile-details-update-modal"}
			   						className="btn"
			   						>
			   							<EditIcon />
			   					</button> 
		        			</div>

		        			<div className="card-body pr-0">
		        				<div className="flex flex-row w-full">
		        					<div className="flex flex-col text-sm space-y-2 w-[50%]">
		        						<p>Name</p>
		        						<p>Surname</p>
		        						<p>Email</p>
		        						<p>Phone number</p>
		        					</div>

		        					<div className="flex flex-col text-sm space-y-2 w-[50%]">
		        						<p>: John</p>
		        						<p>: Doe</p>
		        						<p>: johndoe@email.com</p>
		        						<p>: 071 506 0478</p>						
		        					</div>
		        				</div>
		        			</div>
		        		</div>		        		
	        	</div>

	        	<div className="flex flex-row w-full">
	        		<div className="card">
		        			<div className="card-header flex-row items-center justify-between">
		        				<p className="text-lg text-muted">
		        					Account Details
		        				</p>

		        				<button>
		        					<EditIcon />
		        				</button>
		        			</div>

		        			<div className="card-body pr-0">
		        				<div className="flex flex-row w-full">
		        					<div className="flex flex-col text-sm space-y-2 w-[50%]">
		        						<p>Name</p>
		        						<p>Surname</p>
		        						<p>Email</p>
		        						<p>Phone number</p>
		        					</div>

		        					<div className="flex flex-col text-sm space-y-2 w-[50%]">
		        						<p>: John</p>
		        						<p>: Doe</p>
		        						<p>: johndoe@email.com</p>
		        						<p>: 071 506 0478</p>						
		        					</div>
		        				</div>
		        			</div>
		        		</div>
	        	</div>   		
        	</div>


        	{AccountDetailsUpdateModal}
        	{ProfileDetailsUpdateModal}
        </div>
	);
}

export {Settings};
