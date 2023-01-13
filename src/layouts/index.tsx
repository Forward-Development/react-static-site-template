import { FC, ReactNode } from 'react';
import Navbar from '@components/Navbar';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
