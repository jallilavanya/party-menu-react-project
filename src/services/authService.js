export async function signIn(email, password) {
  const response = await fetch(
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

  return {
    token: result.data.token,
    user: result.data.user,
  }
}