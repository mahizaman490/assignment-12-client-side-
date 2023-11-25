import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";

const Register = () => {

  const { createUser } = useContext(AuthContext)
  const [registerError, SetRegisterError] = useState('');
  const [registerSuccess, setregisterSuccess] = useState('');
  const navigate = useNavigate()
  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password)
    SetRegisterError('')
    setregisterSuccess('')

    if (password.length < 6) {
      SetRegisterError('password should be at least 6 characters or longer')
      return;
    } else if (!/[A-Z]/.test(password)) {
      SetRegisterError('Your password should have at least one upper case characters');
      return;
    } else if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\]/.test(password)) {
      SetRegisterError('Your password should have a special characters');
      return;
    }
    createUser(email, password)
      .then(result => {
        console.log(result.user)

        e.target.reset()
        navigate('/')
           Swal.fire("welcome to our resturant!");
        

      })
      .catch(error => {
        console.error(error);
        SetRegisterError(error.message)
      })


  }

    return (
 <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>FlavourFusion|Register</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col w-2/4 ">
          <div className="">
            <h1 className="text-5xl  font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text">Register now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  ">
            <form onSubmit={handleRegister} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">PhotoURL</span>
                </label>
                <input type="text" placeholder="PhotoURL" name="photoURL" className="input input-bordered" required />
              </div>
          
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
             
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ...">Register</button>
              </div>
            </form>
            <p className="pb-3 pl-3"><span className="text-black ">have an account here? </span> <Link to='/login' className="text-white font-bold underline">LogIn</Link></p>

          </div>
          {
          registerError && <p className="text-white">{registerError}</p>
        }
        {
          registerSuccess && <p>{registerSuccess}</p>
        }
        </div>
       <div className="w-full">
        <img src="https://i.ibb.co/fnkD2wG/4189694-2238239.jpg" alt="" />
       </div>
      </div>
    
 </>
    );
};

export default Register;