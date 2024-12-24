import React, { useState } from "react";

const Login = ({handleLogin}) => {


  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");



  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    // alert(`email is ${email} and password is ${password}`)
    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-red-600">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >

          <input
          value={email}
          onChange={(e)=>{
                setEmail(e.target.value)
          }}   
            required
            className="border-2  border-black  rounded-full h-12 py-4 px-3 text-xl text-black outline-none  bg-transparent placeholder:text-white mt-5 "
            type="email"
            placeholder="Enter your email"
          />

          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}    
            className="border-2  border-black  rounded-full  h-12 py-4 px-3 text-xl text-black outline-none  bg-transparent placeholder:text-white mt-5"
            type="Password"
            placeholder="Enter your password"
          />

          <button className="border-2 border-black rounded-full h-12 w-60 p-0 text-xl text-black outline-none bg-fuchsia-600 placeholder:text-white m-5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
