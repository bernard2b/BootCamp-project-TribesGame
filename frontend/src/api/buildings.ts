export async function fetchBuildings() {
  const response = await fetch("/api/imperia/buildings");
  const buildingsData = await response.json();
  console.log(response.status)
  return buildingsData;
}
export default fetchBuildings