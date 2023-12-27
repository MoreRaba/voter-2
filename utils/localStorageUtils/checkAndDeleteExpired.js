export function checkAndDeleteExpired(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return false;
  }

  const item = JSON.parse(itemStr);
  const now = new Date().getTime();
  const check_greater = now > item.expiry;

  if (check_greater) {
    localStorage.removeItem(key);
    console.log("Removed");
    return false;
  }

  return true;
}
