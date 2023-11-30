import Cookies from 'js-cookie'
export const loginForAdmin = async (email, password) => {
    try {
      const requestBody = {
        email: email,
        password: password,
      };
  
      const response = await fetch('https://apicbsn-dev-krgf.2.us-1.fl0.io/api/session/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Indica que estás enviando datos en formato JSON
        },
        body: JSON.stringify(requestBody), // Convierte el objeto en formato JSON
      });
      
      let accessToken = await response.json()
      Cookies.set('accessToken', accessToken.accessToken)

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      
       return accessToken
    } catch (error) {
      throw new Error(`There was a problem with the fetch operation: ${error.message}`);
    }
  };

  export const current= async () => {
    try {
      let accessToken = Cookies.get('accessToken')
      
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': accessToken
      };
      
      const response = await fetch(`https://apicbsn-dev-krgf.2.us-1.fl0.io/api/session/current`, {
        method: 'GET',
        headers: headers,
        credentials: 'include'
      });

      
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      return response.json()
       // Retorna la respuesta como JSON
    } catch (error) {
      console.log(error)
    }
  };
  



  