"use client";

import { redirect } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import Loading from "@/app/auth/login/loading";
import { loginFunction } from "@/utils/serverUtils/loginFunction";

import { AuthContext } from "@/context/AuthContext";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { auth, setAuth } = useContext(AuthContext);
  console.log("login auth value", auth);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (password !== "") {
      const response = await loginFunction(password);
      console.log(response);
    }
  };

  // if (auth) {
  //   redirect("view");
  // }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="form-container flex flex-col gap-5 justify-center items-center min-h-screen w-full text-4xl lg:text-lg">
          <h1 className="text-2xl font-bold">Login to access</h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            {error && (
              <span className="text-center text-red-600"> {error} </span>
            )}
            <div className="flex flex-col ">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className="text-xl"
                placeholder="Enter passcode"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                style={{}}
                required
              />
            </div>

            <input
              type="submit"
              value="Login"
              name="login"
              className="w-full bg-blue-600 text-white text-lg h-12 cursor-pointer"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
