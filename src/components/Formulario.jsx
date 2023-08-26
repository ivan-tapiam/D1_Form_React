import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [error, setError] = useState(false)
  
  const validarInputs = (e) => {
    e.preventDefault()
    
    if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || password2.trim() === '') {
      setError(true)
      return
    }
  setError(false)
  }

  return (
    <>
    <Form onSubmit={validarInputs}>
      {error ? <p className='error'>Debes inrgesar tu nombre</p> : null}
      
      <p>O usa tu email para registrarte </p>
      <Form.Group className="mb-3" controlId="formBasicName">
        <input className='Form.Control' type="name" placeholder="Nombre" 
        onChange={(e) => setNombre(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <input className='Form.Control' type="email" placeholder="Tuemail@ejemplo.com" 
        onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <input className='Form.Control' type="password" placeholder="Contraseña" 
        onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <input className='Form.Control' type="password" placeholder="Confirma tu contraseña" 
        onChange={(e) => setPassword2(e.target.value)}/>
      </Form.Group>
   
    <div className="d-grid gap-2">
      <Button variant="success" size="lg" type='submit'>
        Registrarse
      </Button>
    </div>
    </Form>
    </>
  )
}

export default Formulario