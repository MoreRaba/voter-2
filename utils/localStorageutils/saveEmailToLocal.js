export function saveEmailToLocal(email) {
  localStorage.setItem("user_email", JSON.stringify(email), 60 * 2);
}
