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
        <title>FlavourFusion|LogIn</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-2/4">
          <div className="">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text">Login now!</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ...">Login</button>
              </div>
            </form>
            <p className="pb-3 pl-3"><span className="text-black">new here? </span> <Link to='/register' className="text-white underline">Register</Link></p>
            <p><button className="btn btn-ghost w-full mb-2 text-black" onClick={handleGoogleSignIn}> SignIn with Google</button></p>
          </div>
          {
          loginError && <p className="text-white">{loginError}</p>
        }
        </div>
        <div className="w-full">
          <img src="https://i.ibb.co/fnkD2wG/4189694-2238239.jpg" alt="" />
        </div>
      </div>
    </>

  );
};

export default LogIn;