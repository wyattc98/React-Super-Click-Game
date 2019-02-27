import React from 'react';
import Character from '../Character/Character';
import './Container.css';

const Container = props => (
    <div className = {
        props.shake
        ? 'container d-flex flex-wrap justify-content-center shake'
        : 'container d-flex flex-wrap justify-content-center'
    }
    >
     {props.Character.map((a, i) =><Character name={a} key={i} clickEvent={props.clickEvent} />)}
    </div>
);

export default Container;