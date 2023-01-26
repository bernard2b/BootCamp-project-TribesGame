export async function fetchUserDetails() {
  const response = await fetch("/api/user");
  const user = await response.json();

  return user;
}

export default fetchUserDetails;
