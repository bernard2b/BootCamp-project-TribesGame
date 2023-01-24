export default async function fetchTroops() {
  const response = await fetch("/api/imperia/troops");
  const troopsData = await response.json();

  return troopsData;
}