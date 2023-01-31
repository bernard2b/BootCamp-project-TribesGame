import { userSettingsRequest } from "../interfaces/userSettings";

export async function fetchUserSettings(
  userSettingsRequest: userSettingsRequest
): Promise<void> {
  try {
    const response = await fetch("/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userSettingsRequest),
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

export default fetchUserSettings;
