import React from 'react';

import './card.style.css';

export const Card = props => (
    <div className='card-container'>
        <img alt="what" src={'https://robohash.org/${props.books.id}?set=set2'}  />
        <h1>{props.books.name}</h1>
    </div>
);