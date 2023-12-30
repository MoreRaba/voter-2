export async function logoutFunction() {
  const response = await fetch("https://theappcrud.000webhostappcom/logout.php", {
    method: "POST",
    credentials: "include",
  });

  // router.push("login");

  console.log(response);
}
