"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../voter/login/loading";
import { loginServer } from "../utils/postData";
import { getPassword } from "../utils/getData";

const Login = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/server/login.php", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        router.push("view");
      } else {
        console.log(data);
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Login failed. Please try again.");
    }
  };

  console.log(password);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="form-container flex flex-col gap-5 justify-center items-center min-h-screen w-full text-4xl lg:text-lg">
          <h1 className="text-2xl font-bold">Login to access</h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            {errorMessage && <span> {errorMessage} </span>}
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
