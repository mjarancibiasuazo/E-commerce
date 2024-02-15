import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Exclusivas Ofertas llegarán a tu Email</h1>
        <p>Subscribase ahora al newsletter</p>
        <div>
            <input type="email" placeholder="Tu Email" />
            <button>Subscribase</button>
        </div>
    </div>
    

  )
}

export default NewsLetter
