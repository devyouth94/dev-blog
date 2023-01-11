import React from 'react';
import Link from 'next/link';

import ThemeSwitch from 'components/ThemeSwitch';
import MobileNav from 'components/MobileNav';

import METADATA from 'constants/METADATA';
import NAV_LINK from 'constants/NAV_LINK';
import Social from './Social';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="mx-auto max-w-3xl px-5">
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-7">
          <Link href="/" className="text-2xl font-bold">
            {METADATA.headerTitle}
          </Link>

          <div className="flex items-center">
            <nav className="hidden sm:block">
              {NAV_LINK.map((link) => (
                <Link
                  href={link.href}
                  key={link.title}
                  className="font-medium hover:underline sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>

        <main className="mb-auto pt-5">{children}</main>

        <footer className="flex flex-col items-center py-10 text-sm">
          <div className="flex gap-5 mb-3  font-semibold underline">
            <Social socialName="EMAIL" href={`mailto:${METADATA.social.email}`} />
            <Social socialName="GitHub" href={METADATA.social.github} />
            <Social socialName="NotionWiki" href={METADATA.social.notion} />
          </div>

          <div className="mb-3  text-gray-400">
            <span>{`${METADATA.author} • © ${new Date().getFullYear()} • `}</span>
            <Link href="/">{METADATA.meta.title}</Link>
          </div>

          <div className=" text-gray-400 hover:underline">
            <a href="https://github.com/devyouth94/dev-blog">GitHub Repository</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
