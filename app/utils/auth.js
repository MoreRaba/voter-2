import { useEffect, useState } from "react";

const Auth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("http://localhost/server/check-auth.php");

      const data = await response.json();
      console.log(data);
    };

    checkAuth();
  }, []);

  return authenticated;
};

export default Auth;
