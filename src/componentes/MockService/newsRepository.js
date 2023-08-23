

export const getNews = async () => {
  try {
      const response = await fetch('http://localhost:8083/api/news/?limit=4');
      if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json(); // Retorna la respuesta como JSON
  } catch (error) {
      throw new Error(`There was a problem with the fetch operation: ${error.message}`);
  }
};
export const getSingleNews = async (id) => 
{
  try {
    const response = await fetch(`http://localhost:8083/api/news/${id}`);
    if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json(); // Retorna la respuesta como JSON
} catch (error) {
    throw new Error(`There was a problem with the fetch operation: ${error.message}`);
}
}

