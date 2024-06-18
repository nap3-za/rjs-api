import React, { Fragment, useState, useRef } from "react";
// import { Link } from "react-router-dom";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import EditIcon from "@material-ui/icons/Edit";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import ProfilePictureCard from "../../components/account/ProfilePictureCard";
import AccountDetails from "../../components/account/AccountDetails";

function Account() {
	// UPA : Username, Profile Picture, Attributes

	// Default form data
	const [upaUpdateFormData, setUpaUpdateFormData] = useState({
		username: null, 
		profile_picture: null, 
		attributes: null,
	});


	// Form references
	const upaUpdateForm = useRef(null);
	

	// Form visibility status states
    
    const [showUpaUpdateModal, setShowUpaUpdateModal] =  useState(false)
 

    // Clears the passed form
	function clearForm(form) {
		form.current && form.current.reset();
	}

	// Update form change handlers
	function handleUpaUpdateFormChange(event) {
		const { name, value } = event.target
		event.preventDefault();
		setUpaUpdateFormData((prevState) => {
			return {
				...upaUpdateFormData,
				[name]: value,
			};
		});
	};


	function handleUpaUpdateFormSubmit(event) {
		event.preventDefault();
		// props.signUp(formData, signUpToken.token);	
		
		clearForm(upaUpdateForm);
	}



   function toggleUpaUpdateModal(event) {
        event.preventDefault()
        const { id } = event.target

        if (showUpaUpdateModal === true) {
            setShowUpaUpdateModal(false);
        } else {
            setShowUpaUpdateModal(true);              
        }
    }

    // Form in the form of modals
    var UpaUpdateModal =
		<div
			className="modal fade"
			id="username-update-modal"
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
								Details Update
							</h5>
							<button type="button" className="modal-close-btn" data-bs-dismiss="modal" aria-label="Close">
								<CloseRoundedIcon fontSize="large"/>
							</button>
						</div>

						<div className="modal-body py-0 my-0">

		                   <form className="space-y-4 md:space-y-6" onSubmit={handleUpaUpdateFormSubmit} ref={upaUpdateForm}>
		                        <div>
		                            <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
		                            	Username
		                            </label>
		                            <input type="text" name="username" value="Sir Nape Ntsoane ||" onChange={handleUpaUpdateFormChange} id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
		                        </div>

		                        <div>
		                            <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
		                            	Attributes
		                            </label>
		                        </div>

		                        <div>
		                            <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
		                            	Profile picture
		                            </label>
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
        <div className="page-view-container">

        	<p className="page-title">
        		Account Details
        	</p>

        	<div className="account-header">
        		{/* <div className="profile-picture-container"> */}
        			<img className="profile-picture"src="" />
        		{/* </div> */}

        		<div className="account-titles">
        			<p className="verbose-name">Mr Mbona SM</p>
        			<div className="attributes-container">
        				<div className="attribute">
        					<NotificationsRoundedIcon fontSize="small" />
        					Something
        				</div>
        				<div className="attribute">
        					<NotificationsRoundedIcon fontSize="small" />
        					Principal
        				</div>
        				<div className="attribute">
        					<NotificationsRoundedIcon fontSize="small" />
        					Sport
        				</div>


        			</div>
        		</div>
   
   				<div className="actions">

   					<button 
						data-bs-toggle="modal"
                    	onClick={toggleUpaUpdateModal}
                    	data-bs-target={"#username-update-modal"}
   						className="btn btn-md btn-primary"
   						>
   						Edit
   					</button>
   					<button className="btn btn-md btn-primary">
   						Something
   					</button>
   					<button className="btn btn-md btn-primary">
   						Here
   					</button>
   					 
   				</div>
        	</div>

        	<div className="account-info">

	        	<div className="flex flex-col space-y-6 w-full">
	        		<div className="card">
	        			<div className="card-header text-normal text-lg text-muted">
	        				Timeline
	        			</div>

	        			<div className="card-body h-60">
	        				Some graphics in here
	        			</div>
	        		</div>

	        		<div className="flex flex-col w-full space-x-0 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
		        		<div className="card">
		        			<div className="card-header text-normal text-lg text-muted">
		        				Stats
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
		        			<div className="card-header text-normal text-lg text-muted">
		        				Overview
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
        	</div>

        	{UpaUpdateModal}

        </div>
	);
}

export default Account;
