import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";

const LogIn = () => {

  const { signInUser,signInWithGoogle } = useContext(AuthContext);
  const [loginError,setLoginError] = useState('')
  
  const navigate = useNavigate()
  
  const handleLogin = e => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(email,password)
  setLoginError('')
  signInUser(email,password)
  .then(result => {
    console.log(result.user)
     
  Swal.fire("you logged in successfully!")
  
    e.target.reset()
    navigate('/')
  })
  .catch(error => {
  console.error(error);
    setLoginError(error.message)
  })
  
  }
  const handleGoogleSignIn = () =>{
   signInWithGoogle() 
   .then(result =>{
    console.log(result.user)
    Swal.fire("you logged in successfully!")
    navigate('/')
   })
   .catch(error => {
    console.error(error)
   })
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BDParcel|LogIn</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-2/4">
          <div className="">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-700 via-green-500 to-green-400  text-transparent   bg-clip-text">Login now!</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-[#557C55] ">Login</button>
              </div>
            </form>
            <p className="pb-3 pl-3"><span className="text-black">new here? </span> <Link to='/register' className=" underline">Register</Link></p>
            <p><button className="btn btn-ghost w-full mb-2 text-black" onClick={handleGoogleSignIn}> SignIn with Google</button></p>
          </div>
          {
          loginError && <p className="">{loginError}</p>
        }
        </div>
        <div className="w-full">
          <img src="https://i.ibb.co/J7590WK/14925741-rm314-adj-04.jpg" alt="" />
        </div>
      </div>
    </>

  );
};

export default LogIn;