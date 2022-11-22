export const getNews = (type) => {
    return fetch("http://localhost:80/api/news/list/type?type="+type, {
      method: "GET",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));

      
  };