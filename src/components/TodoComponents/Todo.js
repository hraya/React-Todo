import React from 'react';
import './Todo.css';

const ToDo = (props) => {
    return (
        <li className={props.obj.completed ? 'completed' : 'not-completed'} onClick={() => props.completeHandler(props.obj.id)}> {props.obj.task} </li>
    );
};

export default ToDo;