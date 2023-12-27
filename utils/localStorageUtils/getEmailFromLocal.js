export function getEmailFromLocal() {
  const storedEmail = JSON.parse(localStorage.getItem("user_email"));

  if (!storedEmail) {
    console.log("No email found in storage");
  }

  console.log("Stored email", storedEmail);
  return storedEmail;
}
