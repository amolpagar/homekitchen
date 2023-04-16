const BASE_URL = "http://localhost:5555";

export async function registerUser(userType, data) {
  const response = await fetch(`${BASE_URL}/${userType}s`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function loginUser(userType, data) {
  const response = await fetch(`${BASE_URL}/${userType}s/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function createKitchen(data) {
  const response = await fetch(`${BASE_URL}/kitchens`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getMenuItems() {
  const response = await fetch(`${BASE_URL}/menu-items`);
  return response.json();
}

export async function createOrder(data) {
  const response = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
