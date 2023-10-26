import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ color, index }) => {
  const [alert, setAlert] = useState(false);

  const style = {
    backgroundColor: color.hexString()
  }

  useEffect(() => {
    const alert = setTimeout(() => {
      setAlert(false)
    }, 3000)

    return () => clearTimeout(alert)
  }, [alert])

  const copyToClipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(color.hexString())
  }
  return (
    <div className={index > 10 ? 'color color-light' : 'color'
    } style={style} onClick={copyToClipboard}>
      <p className="percent-value">{color.weight}%</p>
      <p className='color-value'>{color.hexString()}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </div >
  )
}

export default SingleColor
