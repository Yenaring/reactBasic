import React from 'react';
import '../card/card.styles.css';

export const Card = ({user,email})=>{
    
    return (
      <div className ="card-container">
        <h2>{user}</h2>
        <p>{email}</p>
      </div>
    );
}