export async function getLogs() {
  const res = await fetch("https://app-api-main.000webhostapp.com/logs.php");
  if (res.ok) {
    const data = await res.json();
   // console.log("getLogs", data);
    return data;
  }
}
