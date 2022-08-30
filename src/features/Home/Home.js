import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faBitbucket  } from '@fortawesome/free-brands-svg-icons'


export default function Home() {
  return (
    <div className='home'>
      <h1>Hello, my name is Josh Jordal</h1>
      <br/>
      <h3>I'm a web developer that is studying at the University of Oregon</h3>
      <ul className='home-list'>
        <a href='https://github.com/JJordal' target='_blank'><li className='home-list-item'><FontAwesomeIcon icon={faGithub} /></li></a>
        <a href='https://www.linkedin.com/in/joshua-jordal-b7868424a/' target='_blank'><li className='home-list-item'><FontAwesomeIcon icon={faLinkedin} /></li></a>
        <a href='https://bitbucket.org/JJordal/' target='_blank'><li className='home-list-item'><FontAwesomeIcon icon={faBitbucket} /></li></a>
      </ul>
    </div>
  )
}
