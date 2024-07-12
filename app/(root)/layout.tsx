import React, {ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
    console.log('RootLayout rendered');
  return (
    <main>  
      {children}
    </main>
  )
};

export default RootLayout;
