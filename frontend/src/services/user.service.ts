const HOST = "backend-production-79ba.up.railway.app";
const PROTOCOL = "https";
const BASE_URL = `${PROTOCOL}://${HOST}`;

export const registerUser = async (displayName: string, email: string, password: string, image: string) => {
  const response = await fetch(`${BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      displayName,
      email,
      password,
      image,
    }),
  });

  if (!response.ok) {
    throw new Error(`Error creating user: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  localStorage.setItem("@Auth:access_token", data.token);

  return data;
};

export const getUserPosts = async (id: string) => {
  const res = await fetch(`${BASE_URL}/post/user/${id}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
    },
  });
  const data = await res.json();
  return data;
};

export const editUserPost = async (postId: number, editingPostData: any) => {
  const res = await fetch(`${BASE_URL}/post/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
    },
    body: JSON.stringify(editingPostData),
  });

  if (res.ok) {
    return true;
  } else {
    console.error("Erro ao editar o post");
    return false;
  }
};

export const deleteUserPost = async (postId: number) => {
  const res = await fetch(`${BASE_URL}/post/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
       Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
    },
  });

  if (res.ok) {
    return true;
  } else {
    console.error("Erro ao deletar o post");
    return false;
  }
};