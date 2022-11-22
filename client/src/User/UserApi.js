export const login = (user) => {
    //  console.log(name, email, password)
    return fetch("http://localhost:80/api/loginuser", {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
  })
      .then(response => {
          return response.json();
      })
      .catch(err => {
          console.log(err);
      });
   };


   export const authenticate = (data, next) => {
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt', JSON.stringify(data) )
        next();
    }
}


export const isAuthenticated = () => {
    if(typeof window == 'undefined'){
        return false
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }else {
        return false;
    }
}


export const signout = (next) => {
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt')
        next();
        return fetch("http://localhost:80/signout", {
            method: 'GET',
        })
        .then(response => {
            console.log('signout', response)
        })
        .catch(err => console.log(err) )
    }

}