export async function fetchRegistration(data: any): Promise<any> {
  try {
    const response = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dbResponse = await response.json();
    if (!response.ok) {
      throw new Error(dbResponse.message);
    }
    return data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

const path = "api/registration";

export default fetchRegistration;
