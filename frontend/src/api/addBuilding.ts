import AddBuilding from "../interfaces/addBuilding";

export async function addBuildingFetch(type: AddBuilding): Promise<void> {
  try {
    const response = await fetch('/api/imperia/buildings', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(type),
    });
    const dbResponse = await response.json();
    if (!response.ok) {
      throw new Error(dbResponse.message);
    }
    return dbResponse;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    console.log(error)
  }
}

export default addBuildingFetch