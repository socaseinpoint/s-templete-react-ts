import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ ...props }: ButtonProps) => {
  return (
    <button type="button" {...props}>
      {props.children}
    </button>
  )
}

export default Button
