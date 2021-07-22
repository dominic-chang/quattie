import Login from './Login.js'
import useLocalStorage from '../hooks/useLocalStorage'

function App() {
  const [jwt, setjwt] = useLocalStorage('jwt')

  /*
  Check to see if token is valid
  If valid, render the dashboad else go to login page
  
  */

  function getToken(username, password){}


  return (
    <Login onSubmit={getToken}/>
  );
}

export default App;
