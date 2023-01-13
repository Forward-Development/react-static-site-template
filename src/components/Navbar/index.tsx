import clsx from 'clsx';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Progress from './ProgressBar';

import { useLoading } from '@/state/loadingProgress';

const Navbar: FC = () => {
  const location = useLocation();
  const isLoading = useLoading((state) => state.loading);
  return (
    <>
      <nav className="bg-light-base-1 border-b-light-base-3 w-screen border-b">
        <div className="mx-auto flex justify-between px-[60px]">
          <Link className="cursor-pointer py-[10px]" to="/">
            <img width={120} height={40} src="/forward.svg" alt="Forward" />
          </Link>
          <div className="flex gap-8">
            <div className="flex flex-col justify-center">
              <div
                className={clsx(
                  'flex h-full items-center border-b-4 border-transparent',
                  {
                    ['!border-primary-amethys-30']: location.pathname === '/',
                  }
                )}
              >
                <Link to="/">Dashboard</Link>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div
                className={clsx(
                  'flex h-full items-center border-b-4 border-transparent',
                  {
                    ['!border-primary-amethys-30']:
                      location.pathname === '/token_details',
                  }
                )}
              >
                <Link to="/token_details">Token Details</Link>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div
                className={clsx(
                  'flex h-full items-center border-b-4 border-transparent',
                  {
                    ['!border-primary-amethys-30']:
                      location.pathname === '/ticket',
                  }
                )}
              >
                <Link to="/ticket">Ticket</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Progress isAnimating={isLoading} />
    </>
  );
};

export default Navbar;
