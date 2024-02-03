export const createCategory = async (name: string) => {
  const res = await fetch("http://localhost:3001/categories", {
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

export const findCategories = async () => {
  const res = await fetch("http://localhost:3001/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
    },
  });
  const data = await res.json();
  return data;
}