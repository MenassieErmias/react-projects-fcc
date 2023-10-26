import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ color }) => {
  const style = {
    backgroundColor: color.hexString()
  }
  return (
    <div className="color" style={style}>
      <p className="percent-value">{color.weight}%</p>
      <p className='color-value'>{color.hexString()}</p>
    </div>
  )
}

export default SingleColor
