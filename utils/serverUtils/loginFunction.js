import { saveEmailToLocal } from "@/utils/localStorageUtils/saveEmailToLocal";

export async function loginFunction(password) {
  try {
    const response = await fetch("https://app-api-main.000webhostapp.com/login.php", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ password }),
    });

    const data = await response.json();
    // console.log(data);

    if (!data) {
      return false;
      // console.log("Server failed");
    }

    if (!data.success) {
      // console.log("login failed", data.message);
      return data;
    }

    if (data.success) {
      // console.log("email", data.email);

      saveEmailToLocal("user_email", data.email, 3600000);
      return data;
    }
  } catch (error) {
    console.error("Login error:", error);
  }
}
