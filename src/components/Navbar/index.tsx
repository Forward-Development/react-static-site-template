import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <>
      <nav className="bg-light-base-1 border-b-light-base-3 w-screen border-b">
        <div className="mx-auto flex justify-between px-[60px]">
          <Link className="cursor-pointer py-[10px]" to="/">
            <img width={120} height={40} src="/forward.svg" alt="Forward" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
