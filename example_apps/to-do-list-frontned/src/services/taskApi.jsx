const API_URL = 'http://localhost:5173/'

export const getAllTask = async () => {
  try {
    const res = await fetch(`${API_URL}/tasks.json`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await res.json();
    return json;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}