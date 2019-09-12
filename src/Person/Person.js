import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>My name is {props.name}. {props.children}</p>
            <input type="text" onChange={props.nameChange} value={props.name}/>            
        </div>       
    );
}

export default person;