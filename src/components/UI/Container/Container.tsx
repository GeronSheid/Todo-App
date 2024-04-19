import { FC } from "react";

interface IContainer {
    children: React.ReactNode;
}

export const Container: FC<IContainer> = ({children}) => {
  return (
    <div className='container'>
        {children}
    </div>
  )
}
