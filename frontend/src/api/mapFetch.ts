import { mapRequest, mapResponse } from "../interfaces/mapInterface";

export async function fetchPutImperia(data: mapRequest): Promise<void> {
  try {
    const response = await fetch(`../api/registration/map/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dbResponse = await response.json();
    if (!response.ok) {
      throw new Error(dbResponse.message);
    }
    return dbResponse;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

export async function fetchAllImperia(){
  try {
    const response = await fetch(`../api/imperia/map`);
    const dbResponse = await response.json();
    if (!response.ok) {
      throw new Error(dbResponse.message);
    }
    return dbResponse;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}



export default fetchPutImperia;
