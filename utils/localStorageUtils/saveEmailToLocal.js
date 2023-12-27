export function saveEmailToLocal(email) {
  if (email) {
    const storedMail = localStorage.setItem(
      "user_email",
      JSON.stringify(email),
      60 * 2
    );

    console.log("stored email", storedMail);
  } else {
    console.log("No email to save");
  }
}
