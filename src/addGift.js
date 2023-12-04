const url = "http://localhost:5000";

export function addGift(giftData) {
    return fetch(`${url}/gifts`, {
      method: "POST",
      body: JSON.stringify(giftData),
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      return response.json();
    });
}