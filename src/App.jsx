import Card from "./Card";
import './App.css'
import { useState } from "react";

function App() {
  const [estudiante, setEstudiante] = useState("") 
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)


  const onChangeUserName = (event) => setEstudiante(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

    const validateUserName = (estudiante) => {
    
      const withoutSpaces = estudiante.trim();
    
      if (withoutSpaces.length > 3) {
        setShow(true)
        setError(false)
      } else {
        setError(true)
        setError(false)
      }
      };

      const validatePassword = (password) => {

        if (password.length > 6) {
          setShow(true)
          setError(false)
        } else {
          setError(true)
          setError(false)
        }
        };

      

  const handleSumbit = (event) => {
    event.preventDefault()

    const isUsernameValid = validateUserName(estudiante);
    const isPasswordValid = validatePassword(password);

    if (!isPasswordValid || !isUsernameValid) {
      setError(true)
      } else {
      
      setShow(true)
      }

  }


  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      {!show && 
      <form onSubmit={handleSumbit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <label>Estudiante</label>
      <input type="text" placeholder="Nombre de estudiante" value={estudiante} onChange={onChangeUserName} />
      <label>Password</label>
      <input type="password" placeholder="Password" value={password}onChange={onChangePassword}/>

      <button type="submit">Enviar</button>
      
      </form>}
      {show && <Card/>}
      {error && <h3 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h3>}
      
      
    </div>

  )
}


export default App
