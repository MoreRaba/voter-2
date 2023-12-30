export async function getServerVotes() {
  try {
    const response = await fetch("https://app-api-main.000webhostapp.com/", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(
        `Network response was not ok - ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
