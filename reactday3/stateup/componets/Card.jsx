import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder='Enter your name' 
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
      />
      <p style={{ color: 'blue' }}>Name state varible ki value inside card : {props.name} </p>
    </div>
  )
}

export default Card

