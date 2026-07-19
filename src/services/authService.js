export async function signIn(email, password) {
  const response = await fetch('https://party-menu-api.onrender.com/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Unable to sign in. Please try again.')
  }

  return data
}
