/*
  Check to see if token is valid
  If valid, render the dashboad else go to login page
*/
function checkStatus(res) {
  if ( res.ok )  {
  } else {
    if( res.statusText == "Forbidden"){
      console.log("Access is forbidden")
      throw new Error("Access Forbidden")
    }
  }
  return res
}
export function getUserInfo(jwt) {
  const url = "http://localhost:8080/wallet"
  const bearer = `Bearer ${jwt}`
  const options = {
    method: 'GET',
    mode: 'cors',
    headers:{
      'authorization': bearer,
      'Content-Type': 'application/json'
    },
  }

  return fetch(url, options).then((res) => checkStatus(res))
  .then((res) => { return res.json() })
  .then((json) => {
    console.log(JSON.stringify(json));
    return json;
  }).catch(( err ) => {return Promise.reject()})
}