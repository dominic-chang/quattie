const domain = "http://localhost:8080/"

/**
 * Throws an error on 400 http response
 * @param {object} res - http response object from node-fetch API
 * @returns {object} res
 */
export function checkStatus(res) {
  if ( res.ok )  {
  } else {
    if( res.statusText == "Forbidden"){
      console.log("Access is forbidden")
      throw new Error("Access Forbidden")
    }
  }
  return res
}

/**
 * Get User Wallet info
 * @param {string} jwt 
 * @returns {Promise} 
 */
export function getWalletInfo(jwt) {
  const url = domain + "wallet"
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

/**
 * Returns JWT for user authentification
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise} 
 */
export function loginUser(username, password){
const data = JSON.stringify({
  username: username,
  password: password 
})


let url = domain + 'login' 
let options = {
  method: 'POST',
  //mode: 'cors',
  headers:{
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  },
  body: data
}

return fetch(url, options).then((res) => { return res.json() })

}

/**
 * Signs up a new user to quattie. 
 * @param {string} username 
 * @param {string} password 
 */
export function signupUser(username, password){
  const data = JSON.stringify({
    username: username,
    password: password,
    initial_deposit: 10000
  })


  let url = domain + 'signup'
  let options = {
    method: 'POST',
    mode: 'cors',
    headers:{
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    },
    body: data
  }

  return fetch(url, options)
} 

/**
 * Gets User's transaction history
 * @param {string} jwt 
 */
export function getUserHistory(jwt){
  let url = domain + 'history'
  let bearer = `Bearer ${jwt}`

  let options = {
    method: 'GET',
    mode: 'cors',
    headers:{
      'Content-Type': 'application/json',
      'authorization': bearer,
    }
  }

  return fetch(url, options).then((res) => checkStatus(res))
  .then(res => res.json())
  .then(json => {
    console.log(JSON.stringify(json));
    return json
  }).catch(( err ) => {return Promise.reject()})
}