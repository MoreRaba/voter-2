export async function getLocationDetails(ip, setLoading) {
  if (!ip) {
    return Promise.reject("IP address is required");
  }

  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    if (!response.ok) {
      throw new Error("Failed to fetch location details");
    }

    const jsonData = await response.json();

    // Extract the needed location details
    const locationDetails = {
      country: jsonData.country_name,
      region: jsonData.region,
      city: jsonData.city,
      timezone: jsonData.timezone,
    };

    if (response.ok) {
      setLoading(false);
      return locationDetails;
    }
  } catch (error) {
    return Promise.reject(error.message);
  }
}
