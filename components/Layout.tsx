import React from 'react';
import Link from 'next/link';

import ThemeSwitch from 'components/ThemeSwitch';
import MobileNav from 'components/MobileNav';

import METADATA from 'constants/METADATA';
import NAV_LINK from 'constants/NAV_LINK';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="mx-auto max-w-3xl px-4 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <Link href="/" className="text-2xl font-bold">
            {METADATA.headerTitle}
          </Link>

          <div className="flex items-center">
            <nav className="hidden sm:block">
              {NAV_LINK.map((link) => (
                <Link
                  href={link.href}
                  key={link.title}
                  className="font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
