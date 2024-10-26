import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return <div className=" h-auto w-full max-w-6xl mx-auto">{children}</div>;
};

export default Container;
