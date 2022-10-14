import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../../context/auth/AuthContext";

export const SignIn = () => {
  const { Signin } = useContext(AuthContextProvider);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const NavigateTo = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      console.log("sign in");
      await Signin(email, password);
      NavigateTo("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-3 h-[450px] text-center mt-14  ">
      <div className="p-5 flex items-center justify-between ">
        <div></div>
        <div className="w-[500px] h-[350px]  mt-10  ">
          <form onSubmit={handleSignin}>
            <div className=" border h-[395px]  bg-slate-800 text-white text-center py-8 rounded-xl ">
              <div className="p-2">
                <p className="font-bold  uppercase  mb-2"> Sign In</p>
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
                  className="rounded w-[90%] py-3 px-2 text-slate-800 font-bold"
                  type="password"
                  placeholder="enter a passoword"
                />
              </div>
              <div className=" h-[50px] py-4 ">
                <button className="bg-white text-slate-800 w-[30%] font-bold rounded-3xl py-3 hover:bg-slate-800 hover:text-white duration-300 ">
                  Signin
                </button>
              </div>
              <div className="py-4">
                <div className="flex text-center justify-center">
                  Dont Have an Account?{" "}
                  <Link to="/signup">
                    <p className=" ml-1 text-blue-500">Sign Up</p>
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
