export async function fetchBuildings() {
  const response = await fetch("/api/imperia/buildings");
  const buildingsData = await response.json();
  return buildingsData;
}
export default fetchBuildings