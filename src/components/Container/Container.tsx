import { FC, ReactNode, memo } from "react";
interface Children {
  children: ReactNode;
}

const Container: FC<Children> = ({ children }) => {
  return <section className="container">{children}</section>;
};

export default memo(Container);
