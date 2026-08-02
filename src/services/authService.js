export async function signIn(email, password) {
  const response = await fetch(
<<<<<<< HEAD
    'https://serverless-api-teal.vercel.app/api/auth/signin',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  )

  const result = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(
      result.message || 'Unable to sign in. Please try again.'
    )
  }

  // Return only the authentication data
  return {
    token: result.data.token,
    user: result.data.user,
  }
=======
    "https://party-menu-react-project-1.onrender.com/api/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to sign in. Please try again.");
  }

  return data;
>>>>>>> ff65ebb31bd781d137ffde87d22e7f163cb42e18
}