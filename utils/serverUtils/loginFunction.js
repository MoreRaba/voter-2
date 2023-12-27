import { saveEmailToLocal } from "@/utils/localStorageUtils/saveEmailToLocal";

export async function loginFunction(password) {
  try {
    const response = await fetch("http://localhost/server/login.php", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ password }),
    });

    const data = await response.json();

    if (!data.success) {
      console.log("login function failed", data.message);
    }

    saveEmailToLocal(data.email);
    return data;
  } catch (error) {
    console.error("Login error:", error);
  }
}
