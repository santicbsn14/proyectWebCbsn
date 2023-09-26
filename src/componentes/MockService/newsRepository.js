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
};

export const createNews = async (news) =>
{
    try
    {
        const response = await fetch ('http://localhost:8083/api/news/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // Indica que estás enviando datos en formato JSON
            },
            body: JSON.stringify(news), // Convierte el objeto en formato JSON
          })
          return response.json()
    } 
    catch (error)
     {
        throw new Error(`There was a problem with the fetch operation: ${error.message}`);
    }
};

export const updateNews = async (news, id) => 
{
  try {
    const response = await fetch(`http://localhost:8083/api/news/${id}`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json', // Indica que estás enviando datos en formato JSON
          },
          body: JSON.stringify(news), // Convierte el objeto en formato JSON
        })
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json()
} catch (error) {
    throw new Error(`There was a problem with the fetch operation: ${error.message}`);
}
}

export const deleteNews = async (id) =>
{
    try
    {
        const response = await fetch(`http://localhost:8083/api/news/${id}`,{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
          }
        })
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json()
    } catch (error) 
    {
    throw new Error(`There was a problem with the fetch operation: ${error.message}`);
    }
}


