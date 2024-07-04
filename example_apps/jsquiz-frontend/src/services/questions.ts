// const API_URL = import.meta.env.PROD ? 'https:///' : 'http://localhost:5173/'
const API_URL = 'http://localhost:5173/'

export const getAllQuestions = async () => {
  const res = await fetch(`${API_URL}/data.json`)
  const json = await res.json()
  return json
}
