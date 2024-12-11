const BASE_URL = "http://localhost:5136/api/Biblioteca";

export const getRequest = async () => {
    try {
      const response = await fetch(BASE_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`GET request failed with status: ${response.status}`);
      }
  
      const textData = await response.text();
      const data = JSON.parse(textData);
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error during GET request:", error);
      throw error;
    }
  };

  export const getRequestbyId = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`GET request failed with status: ${response.status}`);
      }
  
      const textData = await response.text();
      const data = JSON.parse(textData);

      return data;
    } catch (error) {
      console.error("Error during GET request:", error);
      throw error;
    }
  };

  export const postRequest = async (id, nome, anoNasc) => {
    try {
      let myBody = {
        id: id,
        nome: nome,
        anoNasc: anoNasc,
      };
      
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(myBody),
      });
      
      if (!response.ok) {
        throw new Error(`POST request failed with status: ${response.status}`);
      }
  
      const textData = await response.text();
      const data = JSON.parse(textData);
      return data;
    } catch (error) {
      console.error("Error during POST request:", error);
      throw error;
    }
  };