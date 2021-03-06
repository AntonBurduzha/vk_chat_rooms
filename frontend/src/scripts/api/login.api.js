const getUserData = userId =>{
  return fetch(`/userdata/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
};

const postUserData = data => {
   fetch('/userdata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: data
  });
};

export {
  getUserData,
  postUserData
};