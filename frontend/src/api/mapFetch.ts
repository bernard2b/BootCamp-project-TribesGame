import { mapRequest, mapResponse } from "../interfaces/mapInterface";

export async function fetchMap(data: mapRequest): Promise<void> {
  try {
    const response = await fetch(path, {
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

const path = "../api/registration/map/:imperiumId";

export default fetchMap;
