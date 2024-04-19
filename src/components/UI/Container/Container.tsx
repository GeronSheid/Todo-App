import { FC } from "react";

interface IContainer {
    children: React.ReactNode;
    headerContainer?: boolean;
}

export const Container: FC<IContainer> = ({children, headerContainer}) => {
  return (
    <div className='container'>
        {children}
    </div>
  )
}
