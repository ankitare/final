const url = "http://localhost:5000";

export function updateWishlist(id, updatedWishlist, addWishlist) {

    const updatedWishlistWithDate = {
      ...updatedWishlist,
      dateAdded: addWishlist ? null : new Date().toISOString(),
    };

    return fetch(`${url}/gifts/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedWishlistWithDate),
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      return response.json();
    });
  }