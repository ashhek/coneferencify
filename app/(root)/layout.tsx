import React, {ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
    console.log('RootLayout rendered');
  return (
    <main>
      Navbar
      {children}
      Footer
    </main>
  )
};

export default RootLayout;
