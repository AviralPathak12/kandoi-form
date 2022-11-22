import { API } from "../config";

export const createNews = (news) => {
    //  console.log(name, email, password)
    return fetch("http://localhost:80/api/news/create/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
       
      },
      body: JSON.stringify(news),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
     
      });
  };