import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BotonExample from './Components/BotonExample/BotonExample.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BotonExample   userName={"cdarevalom"} nombre={"Cristian David Arevalo"} />
    <BotonExample   userName={"lrodriguezr"} nombre={"Lorena Tatiana Rodriguez"} />
    <BotonExample   userName={"farevalom"} nombre={"Francisco Arevalo Montañez"}/>
    <BotonExample />
  </StrictMode>,
)
