import './App.css'
import { useState } from 'react'
import Formulario from './components/Formulario'



function App() {
  const [usuarios, setUsuarios] = useState ([])

  const submit = usuario =>{    
   setUsuarios([
    ...usuarios,
    usuario
   ])
  }

  return (
    <div className='grid'>
     
      <div>
        <Formulario submit={submit} />
      </div>
      <div>
        <ul>
          {
            usuarios.map(x =>
              <li key={x.email} >{`${x.name} ${x.apellido}: ${x.email}`}</li>
              )
          } 
        </ul>
      </div>
    </div>
  )
}

export default App
