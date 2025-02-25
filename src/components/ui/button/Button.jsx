import React from 'react'
import cn from '../../../utils/cn'
import signuparrow from  "../../../assets/images/signuplogo.png"

const Button = ({children,onClick=()=>{},className='',...props}) => {
  return (
    <button 

    className={cn(`bg-white flex gap-3 items-center  font-medium text-[#0183CE] rounded-md`,className)}
    onClick={onClick}
    {...props} 
    >{children} <span><img src={signuparrow} alt="" className='max-w-5' /></span></button>
  )
}

export default Button
