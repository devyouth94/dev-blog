import { useState } from 'react';
import { IconCancel, IconDrawer } from 'components/Icon';
import NAV_LINK from 'constants/NAV_LINK';
import Link from 'next/link';

const MobileNav = () => {
  const [isShow, setIsShow] = useState(false);

  const handleClickToggle = () => {
    setIsShow((prev) => {
      if (prev) {
        document.body.style.overflow = 'overlay';
      } else {
        document.body.style.overflow = 'hidden';
      }
      return !prev;
    });
  };

  return (
    <>
      <button
        aria-label="Toggle Menu"
        type="button"
        onClick={handleClickToggle}
        className="ml-3 h-8 w-8 sm:hidden"
      >
        <IconDrawer />
      </button>

      <div
        className={`fixed top-0 left-0 z-10 h-full w-full bg-neutral-200 dark:bg-neutral-800 opacity-95 sm:hidden transform duration-300 ease-in-out ${
          isShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button
            aria-label="Toggle Menu"
            type="button"
            onClick={handleClickToggle}
            className="mr-5 mt-7 h-8 w-8"
          >
            <IconCancel />
          </button>
        </div>

        <nav className="fixed mt-12 h-full">
          {NAV_LINK.map((link) => (
            <div key={link.title} className="px-5 py-4">
              <Link
                href={link.href}
                className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:underline"
                onClick={handleClickToggle}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
