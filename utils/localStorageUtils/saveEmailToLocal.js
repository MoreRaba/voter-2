export function saveEmailToLocal(key, value, ttl) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };

  try {
    localStorage.setItem(key, JSON.stringify(item));
    console.log("User data saved to localStorage");
  } catch (error) {
    console.error("Error saving user data to localStorage", error);
  }
}
