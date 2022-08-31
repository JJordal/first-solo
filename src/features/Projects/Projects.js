import React from 'react'
import './Projects.css'
import jamming from '../../imgs/Jamming.png'
import Card from '../Card/Card'
import Coupon from '../../imgs/Coupon.png'
import Cipher from '../../imgs/Cipher.png'
import Contagion from '../../imgs/contagion.png'


export default function Projects() {
  return (
    <div className='projects-page'>
      <div className='header'>
        <h1>Highlighted Projects</h1>
      </div>
      <div className='projects'>
        <a href='https://github.com/JJordal/JammingReact' target='_blank'><Card img={jamming} title={'Jamming'} desc={'Spotify playlist maker'} skill={'React'} /></a>
        <a href='https://github.com/Aotae/Unified-Grocery-Application' target='_blank'><Card img={Coupon} title={'Coupon Checker (Group Project)'} desc={'Searches Coupons from all stores to find the best coupon for you'} skill={'Python'} /></a>
        <a href='https://bitbucket.org/jjordal/uoregon-cis330-w22/src/master/homework06/' target='_blank'><Card img={Cipher} title={'Cipher'} desc={'Decrypts or Encrypts 5 different cipher types'} skill={'C++'} /></a>
        <a href='https://bitbucket.org/jjordal/school-projects/src/master/211%20Contagion/' target='_blank'><Card img={Contagion} title={'Contagion'} desc={'Simulates the spread of a virus with each square representing a person'} skill={'Python'} /></a>
      </div>
    </div>
  )
}
