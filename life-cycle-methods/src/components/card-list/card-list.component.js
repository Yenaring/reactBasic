import React from 'react';

import {Card} from '../card/card.component'

import './card-list.styles.css';

export const CardList = ({users}) =>{
    return (
      <div className="card-list">
        {users.map((user) => (
          <Card  key={user.id} user={user.name} email={user.email}/>
        ))}
      </div>
    );
}