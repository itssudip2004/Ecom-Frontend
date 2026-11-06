export const API_URL = import.meta.env.API_URL;

export async function login({ email, password }) {
  const response = await fetch(`${API_URL}/api/v1/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",

    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login Failed");
  }
  return data;
}

export async function signup({ email, password }) {
  const response = await fetch(`${API_URL}/api/v1/users/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();

  if (!response.ok) {
    return new Error(data.message || "SignUp Failed");
  }
  return data;
}
