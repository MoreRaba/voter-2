export async function getLogs() {
  const res = await fetch("http://localhost/server/logs.php");
  if (res.ok) {
    const data = await res.json();
    console.log("getLogs", data);
    return data;
  }
}
