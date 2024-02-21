import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Registrarse</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Nombre"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Contraseña"/>
        </div>
        <button>Registrarse</button>
        <p className="loginsignup-login">Ya tienes una cuenta? <span>Entra aquí</span></p>
        <div className="loginsignup-agree"></div>
        
        <p><input type="checkbox" name='' id='' /> A continuación, Esta de acuerdo con los terminos de uso & politica de privacidad?</p>
      </div>
    </div>
  )
}

export default LoginSignup
