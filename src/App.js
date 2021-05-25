import React, { useState } from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";

function App() {
  const [SignupFormStatus, setSignupFormStatus] = useState(false);
  const SigninProps = useSpring({ 
    left: SignupFormStatus ? -500 : 0, // Login form sliding positions
  });
  const SignupProps = useSpring({
    left: SignupFormStatus ? 0 : 500, // Register form sliding positions 
  });

  const SigninBtnProps = useSpring({
    borderBottom: SignupFormStatus 
      ? "solid 0px transparent"
      : "solid 2px #1059FF",  //Animate bottom border of login button
  });
  const SignupBtnProps = useSpring({
    borderBottom: SignupFormStatus
      ? "solid 2px #1059FF"
      : "solid 0px transparent", //Animate bottom border of register button
  });


  function SignupClicked() {
    setSignupFormStatus(true);
  }
  function SigninClicked() {
    setSignupFormStatus(false);
  }

  return (
    <div className="animation zoom-in Signin-Signup-wrapper" data-mdb-toggle="animation" data-mdb-animation="zoom-in" data-mdb-animation-start="onLoad">
      <div className="nav-buttons" >
        <animated.button
          onClick={SigninClicked}
          id="SigninBtn"
          style={SigninBtnProps}
        >
          <div class="btn-signin">Signin</div>
        </animated.button>
        <animated.button
          onClick={SignupClicked}
          id="SignupBtn"
          style={SignupBtnProps}
        >
          <div class="btn-signup">Signup</div>
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="Signinform" style={SigninProps}>
          <SigninForm />
        </animated.form>
        <animated.form action="" id="Signupform" style={SignupProps}>
          <SignupForm />
        </animated.form>
        
      </div>
      
     
    </div>
  );
}

function SigninForm() {
  return (
    <div className="signin">
      <div class="Social">
        <div className="linkedin" align="center">
          <button className="btn btn-primary btn-linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg> Linkedin
          </button>
        </div>
        <div className="row my-3" align="center">
          <code>
            <button className="btn btn-primary btn-google">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
              </svg> Google
            </button>
            <button className="btn btn-primary btn-fb">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg> facebook
            </button>
          </code>
      </div>
      <React.Fragment>
      <label for="username">USERNAME</label>
      <input type="text" id="username" />
      <label for="password">PASSWORD</label>
      <input type="text" id="password" />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
    <div class="forgot-text" align="center">
            <hr size="30"/>
            <a herf="#">Forgot your password?</a>
           </div>
    </div>

    </div>
  );
}

function SignupForm() {
  return (
    <div  className="signup">
      <center>
      Signup using your Social accounts.<br/><br/>
      </center>
    <div class="Social">
    <div className="linkedin" align="center">
      <button className="btn btn-primary btn-linkedin">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
      </svg> Linkedin
      </button>
    </div>
    <div className="row my-3" align="center">
      <code>
      <button className="btn btn-primary btn-google">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
        </svg> Google
      </button>
      <button className="btn btn-primary btn-fb">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg> facebook
      </button>
      </code>
    </div>
    </div>
    <center>
      <h4>or</h4>
      </center>
    <form>
      <label for="firstname">First name</label>
      <input type="text" id="firstname" required />
      <label for="lastname">Last name</label>
      <input type="text" id="lastname" required/>
      <label for="email">email</label>
      <input type="email" id="email" required/>
      <label for="phone">Enter your phone number:</label>

      <input type="tel" id="phone" name="phone"
       pattern="^\d{10}$"
       required/>
      <label for="password">password</label>
      <input type="password" id="password" />

      <center>
      <p  className="my-3"> By clicking Signup you agree to our terms of use, and our privacy.</p>
      <button className="btn btn-primary">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
      </svg> Signup
      </button>
      </center>
    </form>
    </div>
  );
}

export default App;
