/* eslint-disable no-unused-vars */
import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './UpButton.scss'

const UpButton = () => {
  return (
    <span className='start-button'>
    <button className="go-up" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title='Go Up'>
          <FaArrowUp className='up-button'/>
    </button>
  </span>
  )
}

export default UpButton