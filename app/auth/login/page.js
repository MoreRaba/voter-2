"use client";

import { loginFunction } from "@/utils/serverUtils/loginFunction";
import LoadingAnimation from "/app/auth/login/loading";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkAndDeleteExpired } from "@/utils/localStorageUtils/checkAndDeleteExpired";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const check = checkAndDeleteExpired("user_email");

    console.log(check);

    if (check) {
      redirect("view");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (password !== "") {
      const response = await loginFunction(password);

      console.log(response);

      if (!response.success) {
        return console.log("Failed to login");
      }

      // console.log("Successfully logged in");
      router.push("view");
    }
  };

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <section className="form-container flex flex-col gap-5 justify-center items-center min-h-screen w-full">
          <h1 className="text-2xl font-bold ">Login to access</h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            {error && (
              <span className="text-center text-red-600"> {error} </span>
            )}
            <div className="flex flex-col ">
              <input
                type="text"
                name="password"
                className="text-lg pl-0 border-b-2 border-b-black border-0  outline-none focus:ring-0 focus:outline-0"
                placeholder="Enter passcode "
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>

            <button
              // type="submit"
              value="Login"
              name="login"
              className="w-full bg-blue-600 hover:border-2 hover:border-blue-600 hover:bg-white hover:text-black text-white text-lg h-12 cursor-pointer"
            >
              Button
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default Login;
