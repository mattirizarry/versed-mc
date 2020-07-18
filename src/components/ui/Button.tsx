/** @jsx createElement */

import { createElement, FC, SyntheticEvent, ReactNode } from 'react'

interface Props {
  label?: string
  size: 'sm' | 'md' | 'lg'
  style: 'primary' | 'secondary' | 'tertiary'
  bold?: boolean
  handler: (e: SyntheticEvent) => void
  children?: ReactNode
}

const Button: FC<Props> = ({ label, size, style, handler, children, bold }) => {
  return (
    <button
      className={`button-cta ${bold && 'bold'} ${size} ${style}`}
      onClick={handler}
    >
      {label}
      {children}
    </button>
  )
}

export default Button
