import { getEmailFromLocal } from "./getEmailFromLocal";

export function deleteDataFromLocal() {
  localStorage.removeItem("user_email");

  const userAuth = getEmailFromLocal();

  if (userAuth) {
    return false;
  }

  return true;
}
