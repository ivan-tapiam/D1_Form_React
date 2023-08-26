import React from 'react'
import Formulario from './Formulario'
import SocialButton from './SocialButton'
import Alert from './Alert'

const Registro = () => {
  const icons = ['facebook', 'github', 'linkedin']
  return (
    <>
    <h2>Crear una cuenta</h2>   
    <SocialButton icons={icons}/>
    <Formulario />
    <Alert />
    </>
  )
}

export default Registro