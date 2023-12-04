const url = "http://localhost:5000";

export function deleteGift(id) {
    return fetch(`${url}/gifts/${id}`, {
      method: "DELETE",
    });
}