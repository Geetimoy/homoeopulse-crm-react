import { useState } from 'react';
import logo from '../images/logo-light.png';
import './LogIn.css';
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";


function LogIn() {
	const [email, setEmail] =useState('');
	const [password, setPassword] =useState('');
	const navigate = useNavigate();
	const url = "http://localhost:5000/api/user/login"
	// const handleChange = (e)=>{
	// 	setEmail(e.target.value)
	// }
	// const handleChange = (e)=>{
	// 	setEmail(e.target.value)
	// }

	const handleSubmit=(e)=>{
		e.preventDefault();
		//console.log(email, password);

		const data = {
			email,
			password
		};
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', // Specify the content type
				// You can add more headers if needed
			},
			body: JSON.stringify(data) // Convert data to JSON format
		};
		fetch(url, options)
			.then(response => {
				// Handle the response
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json(); // or response.text() for plain text response
			})
			.then(data => {
				// Handle the data
				localStorage.setItem('myData', JSON.stringify(data));
				return navigate("/Dashboard");
				
			})
			.catch(error => {
				// Handle errors
				console.error('Fetch error:', error);
			});
			
	}

  return (
    <div className="account-pages my-5 pt-5">
      <div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8 col-lg-6 col-xl-5">
						<div className="card login-section rounded-lg">
							<div className="bg-primary">
								<div className="logo-sec">
									<img src={logo} className="w-100" alt="logo" />
								</div>
								<div className="text-primary text-center p-4">
									<h5 className="text-black font-size-20 font-bold text-xl">Welcome Admin !</h5>
									<p className="text-white-50">Sign in to continue to HomoeoPULSE.</p>
								</div>
							</div>
							<div className="card-body p-4">
								<div className="p-3">
									<form className="form-horizontal has-validation-callback" id="login_form" name="login_form" onSubmit={handleSubmit}>
										<div className="form-group has-success">
											<label htmlFor="user_name">Email</label>
											<input type="text" className="form-control valid" id="email" name="email" placeholder="Enter email" data-validation="required" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
										</div>
										<div className="form-group has-success">
											<label htmlFor="password">Password</label>
											<input type="password" className="form-control valid" id="password" name="password" placeholder="Enter password" data-validation="required" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
										</div>
										<div className="form-group row">
											<div className="col-sm-6">
												<div className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="remember_me" name="remember_me"/>
													<label className="custom-control-label" htmlFor="remember_me">Remember me</label>
												</div>												
											</div>
											<div className="col-sm-6 text-right">
												<button className="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
											</div>
										</div>
									 <div className="form-group mt-2 mb-0 row">
											<div className="col-12 mt-2">
												{/* <a href="https://demo.bluwebmedia.co.in/homoeopulse_v3/project/crm-tool/reset-password"><i className="mdi mdi-lock"></i> Forgot your password?</a> */}

												<Link to="/ForgotPassword"><i className="mdi mdi-lock"></i> Forgot your password? </Link>
												{/* <Route path="/" element={<LogIn/>} /> */}
											</div>
										</div> 
									</form>
								</div>
							</div>
						</div>
						<div className="mt-5 text-center">
							<p className="mb-0">© 2023 HomoeoPULSE.</p>
						</div>
					</div>
				</div>
			</div>
    </div>
  );
}

export default LogIn;
