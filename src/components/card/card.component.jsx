import React from 'react';

import './card.style.css';

export const Card = props => ( 
    <div className='card-container'>
        <img 
            alt="what" 
            // use back-tick inside src{} it is not single quotes
            src = {`https://robohash.org/${props.books.id}?set=set2&size=180x180`}
            />
        <h2>{ props.books.name }</h2>
        <h5>{ props.books.email }</h5>  
    </div>
);