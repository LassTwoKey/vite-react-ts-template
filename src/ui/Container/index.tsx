import { FC } from 'react'

type ContainerType = {
  children: React.ReactNode
}

export const Container: FC<ContainerType> = (props) => {
  const { children } = props
  return <button>{children}</button>
}
