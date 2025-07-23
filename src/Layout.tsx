import React, { type FC } from "react";
import NavigationBar from "./components/NavigationBar";

type LayoutType = {
  children: React.ReactNode;
};

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};

export default Layout;
