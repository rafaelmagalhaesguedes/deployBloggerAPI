const HOST = "backend-production-79ba.up.railway.app";
const PROTOCOL = "https";
const BASE_URL = `${PROTOCOL}://${HOST}/categories`;

export const createCategory = async (name: string) => {
  const res = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
    },
    body: JSON.stringify({
      name: name,
    }),
  });

  if (res.status !== 201) {
    const data = await res.json();
    throw new Error(data.message);
  }

  return res.json();
}

export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
    },
  });
  const data = await res.json();
  return data;
}

export const updateCategory = async (id: number, name: string) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
    },
    body: JSON.stringify({
      name: name,
    }),
  });

  if (res.status !== 200) {
    const data = await res.json();
    throw new Error(data.message);
  }

  return res.json();
}

export const deleteCategory = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
    },
  });

  if (res.status !== 200) {
    const data = await res.json();
    throw new Error(data.message);
  }

  return res.json();
}