export async function logoutFunction() {
  const response = await fetch("http://localhost/server/logout.php", {
    method: "POST",
    credentials: "include",
  });

  // router.push("login");

  console.log(response);
}
