import React from 'react';

const Input = (props) => {
   const {label,inputType,value,inputevent,placeholder} = props
  return (
    <div className='from-group' >
      <lable >{label}</lable>
      <input type={inputType}  placeholder={placeholder} value={value} onClick={inputevent} required/> 
    </div>
  )
}

export default Input