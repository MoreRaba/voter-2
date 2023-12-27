export function deleteDataFromLocal() {
  const userAuth = localStorage.removeItem("user_email");
  console.log(userAuth);
}
