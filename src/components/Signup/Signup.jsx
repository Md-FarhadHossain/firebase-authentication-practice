import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";

const Signup = () => {
  const { singUp,googleLogin } = useContext(UserContext);

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  console.log(location)


  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singUp(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        navigate(location.pathname)
        form.reset()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () =>{
    googleLogin()
    .then((userCredential) => {
      console.log(userCredential.user);
      navigate(from, {replace: true})
     
    })
    .catch((error) => {
      console.log(error);
    });
  }


  return (
    <div>
      <h1>signup</h1>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="border"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            className="border"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <button className="btn bg-blue-500 hover:bg-blue-600 py-2 px-6 text-lg font-semibold text-white">
          Sign UP
        </button>

        

      </form>

      <button onClick={handleGoogleLogin} className="btn bg-red-500 hover:bg-red-600 py-2 px-6 text-lg font-semibold text-white">
          Google sign

        </button>
    </div>
  );
};

export default Signup;
