import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import "./InputSearchBox.css"

const InputSearchBox = () => {
  return (
    <div className="input__box__conatiner">
      <input  placeholder="Search ..." type="text" className="searchinput" />
  </div>
  )
}

export default InputSearchBox