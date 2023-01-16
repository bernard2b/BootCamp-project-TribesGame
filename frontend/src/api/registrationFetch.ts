export async function fetchRegistration() {
  const response = await fetch("/api/registration");
  const registrationData = await response.json();

  return registrationData;
}


export default fetchRegistration