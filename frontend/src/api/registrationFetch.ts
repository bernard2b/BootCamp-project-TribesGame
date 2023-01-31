import { createUserRequest, createUserResponse } from "../interfaces/registrationInterface";

export async function fetchRegistration(data: createUserRequest): Promise<void> {
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
    return dbResponse;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

const path = "http://localhost:3000/api/registration";

export default fetchRegistration;
