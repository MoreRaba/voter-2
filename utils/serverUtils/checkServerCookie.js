export async function checkServerCookie() {
  try {
    const response = await fetch(
      "http://localhost/server/cookie/check-session.php",
      {
        method: "GET",
      }
    );

    const data = await response.json();
    if (!data) {
      console.log("Server failed");
    }

    if (!data.success) {
      console.log("Check cookie failed", data.message);
      return data;
    }

    if (data.success) {
      console.log("Success", data.message);

      saveEmailToLocal("user_email", data.email, 3600000);
      return data;
    }
  } catch (error) {
    console.error("Check cookie error:", error);
  }
}
