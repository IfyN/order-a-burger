import React from 'react';

const person = (lunga) => {
    return(
        <div>
    <p>I am a {lunga.name} and I am {lunga.age} years old.</p>
    <p>{lunga.children}</p>
        </div>
    )
};

export default person;