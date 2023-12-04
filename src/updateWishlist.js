const url = "http://localhost:5000";

export function updateWishlist(id, updatedWishlist) {
    return fetch(`${url}/gifts/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedWishlist),
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      return response.json();
    });
  }