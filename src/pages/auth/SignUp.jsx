import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../../context/auth/AuthContext";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { SignUp } = useContext(AuthContextProvider);

  const NavigateTo = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      console.log("Sign Up");
      await SignUp(email, password ,name)

      NavigateTo("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-3  h-[450px] text-center mt-2 mb-14 ">
      <p className="font-bold text-2xl pb-[1px] uppercase "> Sign Up</p>
      <div className="p-5 flex items-center justify-between ">
        <div></div>
        <div className="w-[500px] h-[350px]  mt-10">
          <form onSubmit={handleSignUp}>
            <div className="  h-[395px]  bg-slate-800 text-white text-center p-2 rounded-xl ">
              <div className="p-3">
              <p className="font-bold  uppercase"> Sign Up</p>
                <label className="uppercase font-bold text-lg">Name</label>
                <br />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded  w-[90%] py-3 px-2 text-slate-800 font-bold "
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="p-2">
                <label className="uppercase font-bold text-lg   ">Email</label>
                <br />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded w-[90%] py-3 px-2 text-slate-800 font-bold "
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="p-2">
                <label className="uppercase font-bold text-lg">Password</label>
                <br />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded w-[90%] py-3 px-2 text-slate-800 font-bold "
                  type="password"
                  placeholder="enter a passoword"
                />
              </div>
              <div className=" h-[50px]  ">
                <button className="bg-white text-slate-800 w-[30%] font-bold rounded-3xl py-3 hover:bg-slate-800 hover:text-white duration-300 ">
                  SignUp
                </button>
              </div>
              <div>
                <div className="flex text-center justify-center">
                  Already have an Account?{" "}
                  <Link to="/signin">
                    <p className=" ml-1 text-blue-500">Sign In</p>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};
