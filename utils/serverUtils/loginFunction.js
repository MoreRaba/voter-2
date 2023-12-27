import { saveEmailToLocal } from "@/utils/localStorageUtils/saveEmailToLocal";

export async function loginFunction(password) {
  try {
    const response = await fetch("http://localhost/server/login.php", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ password }),
    });
    const data = await response.json();

    if (!data) {
      console.log("Server failed");
    }

    if (!data.success) {
      console.log("login failed", data.message);
      return data;
    }

    if (data.success) {
      console.log("email", data.email);

      saveEmailToLocal("user_email", data.email, 3600000);
      return data;
    }
  } catch (error) {
    console.error("Login error:", error);
  }
}
