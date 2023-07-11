import { InputHTMLAttributes } from 'react'
import './Checkbox.css'

export function Checkbox(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type='checkbox'
      className='checkbox'
      {...props}
    />
  )
}
