export async function fetchUserDetails() {
  const response = await fetch("/api/userdetails");
  const user = await response.json();

  return user;
}

export default fetchUserDetails;
