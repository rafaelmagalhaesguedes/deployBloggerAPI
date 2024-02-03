import Swal from "sweetalert2";

const API_URL = 'http://localhost:3001';

export const getPosts = async (id: string) => {
    const res = await fetch(`${API_URL}/post/user/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
        },
    });
    const data = await res.json();
    return data;
};

export const editPost = async (postId: number, editingPostData: any) => {
    const res = await fetch(`${API_URL}/post/${postId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
        },
        body: JSON.stringify(editingPostData),
    });

    if (res.ok) {
        Swal.fire({
            title: "Post edited",
            icon: "success",
        });
        return true;
    } else {
        console.error("Erro ao editar o post");
        return false;
    }
}

export const deletePost = async (postId: number) => {
    const res = await fetch(`${API_URL}/post/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
        },
    });

    if (res.ok) {
        Swal.fire({
            title: "Post deleted",
            icon: "success",
        });
        return true;
    } else {
        console.error("Erro ao deletar o post");
        return false;
    }
}