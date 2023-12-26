export async function getServerVotes() {
  try {
    const response = await fetch("http://localhost/server/", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(
        `Network response was not ok - ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
