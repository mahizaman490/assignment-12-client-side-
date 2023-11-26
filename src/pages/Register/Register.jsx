import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosPublic from "../../useAxiosPublic";

const Register = () => {
const axiosPublic = useAxiosPublic();
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
        const userInfo ={
          mail:email


        } 
        axiosPublic.post('/users',userInfo)
          .then(res =>{
            if(res.data.insertedId){
              console.log('user added database');
                  e.target.reset()
        navigate('/')
           Swal.fire("welcome to our resturant!");
            }
          })

  

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
                <title>BDParcel|Register</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col w-2/4 ">
          <div className="">
            <h1 className="text-5xl  font-bold bg-gradient-to-r from-green-700 via-green-500 to-green-400 text-transparent   bg-clip-text">Register now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  ">
            <form onSubmit={handleRegister} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">PhotoURL</span>
                </label>
                <input type="text" placeholder="PhotoURL" name="photoURL" className="input input-bordered" required />
              </div>
          
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
             
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-700">Register</button>
              </div>
            </form>
            <p className="pb-3 pl-3"><span className="text-black ">have an account here? </span> <Link to='/login' className=" font-bold underline">LogIn</Link></p>

          </div>
          {
          registerError && <p className="">{registerError}</p>
        }
        {
          registerSuccess && <p>{registerSuccess}</p>
        }
        </div>
       <div className="w-full">
        <img src="https://i.ibb.co/J7590WK/14925741-rm314-adj-04.jpg" alt="" />
       </div>
      </div>
    
 </>
    );
};

export default Register;