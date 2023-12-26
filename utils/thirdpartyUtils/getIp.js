export async function getIp() {
  const res = await fetch("https://api.ipify.org/?format=json");
  if (res.ok) {
    const data = await res.json();

    return data.ip;
  }
}
