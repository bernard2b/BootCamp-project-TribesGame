export async function fetchBuildungs() {
  const response = await fetch("/api/buildings");
  const buildingsData = await response.json();

  return buildingsData;
}


export default fetchBuildungs