import React from 'react'
import './Card.css';

export default function Card(props) {
  return (
    <div class="card">
        <img src={props.img} alt='Jamming project' style={{width: '100%'}} />
        <div class="container">
            <h4><b>{props.title}</b></h4>
            <p>{props.desc} <br/><br/> Main skill: {props.skill}</p>
        </div>
    </div>
  )
}
