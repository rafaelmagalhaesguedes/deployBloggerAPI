const HOST = "backend-production-79ba.up.railway.app";
const PROTOCOL = "https";
const BASE_URL = `${PROTOCOL}://${HOST}/user`;

export const updateUserProfile = async (userId: string, displayName: string, email: string, image: string) => {
  const response = await fetch(`${BASE_URL}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
    },
    body: JSON.stringify({ displayName, email, image }),
  });

  if (!response.ok) throw new Error(`Error updating user: ${response.status} ${response.statusText}`);

  const data = await response.json();

  if (data) return true;
}