import React from 'react'
import './Projects.css'
import jamming from '../../imgs/Jamming.png'

export default function Projects() {
  return (
    <div className='projects-page'>
      <div className='header'>
        <h1>Highlighted Projects</h1>
      </div>
      <div className='projects'>
        <div class="card">
          <img src={jamming} alt='Jamming project' style={{width: '100%'}} />
          <div class="container">
            <h4><b>Jamming</b></h4>
            <p>Spotify playlist maker <br/> Main skill: React</p>
          </div>
        </div>
      </div>
    </div>
  )
}
