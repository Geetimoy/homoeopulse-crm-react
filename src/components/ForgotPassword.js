import './ForgotPassword.css';
import logo from '../images/logo-light.png'
import { Link } from "react-router-dom";

function ForgotPassword() {
  
  return (
    <div className="account-pages my-5 pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card login-section reset-password-section">
              <div className="bg-primary">
                <div className="logo-sec">
                <img src={logo} className="w-100" alt="logo" />
                </div>
                <div className="text-primary text-center p-4">
                  <h5 className="text-white font-size-20 p-2">Reset Password</h5>
                </div>
              </div>
              <div className="card-body p-4">
                <div className="p-3">
                  <div className="alert alert-info reset-password-instruction text-center" role="alert">
                    Enter your Email and instructions will be sent to you!
                  </div>
                  <div className="alert reset-password-alert-message text-center hidden" role="alert">
                    
                  </div>
                  <form className="form-horizontal has-validation-callback" id="reset_password_form" name="reset_password_form">
                    <div className="form-group">
                      <label htmlFor="useremail">Email</label>
                      <input type="email" className="form-control" id="email" name="email" placeholder="Enter your login email id" data-validation="required" />
                    </div>
                    <div className="form-group row  mb-0">
                      <div className="col-6 text-left pt-2">
                        <div><i className="mdi mdi-lock"></i> <Link to="/">Back to login!</Link></div>
                      </div>
                      <div className="col-6 text-right">
                        <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
                        {/* <input type="reset" value="Reset Form"/> */}
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

export default ForgotPassword;
