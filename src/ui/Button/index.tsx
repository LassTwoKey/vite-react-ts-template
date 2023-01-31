import { FC } from 'react'

type ButtonType = {
  children: React.ReactNode
}

export const Button: FC<ButtonType> = (props) => {
  const { children } = props
  return <button>{children}</button>
}
