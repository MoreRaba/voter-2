export async function logoutFunction() {
  const response = await fetch("https://app-api-main.000webhostapp.com/logout.php", {
    method: "POST",
    credentials: "include",
  });

  // router.push("login");

  console.log(response);
}
