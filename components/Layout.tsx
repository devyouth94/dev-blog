import React from 'react';
import Link from 'next/link';
import METADATA from 'constants/METADATA';
import Social from './Social';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="mx-auto max-w-3xl px-5">
      <div className="flex h-screen flex-col justify-between">
        <Header />

        <main className="mb-auto pt-5">{children}</main>

        <footer className="flex flex-col items-center py-10 text-sm">
          <div className="flex gap-5 mb-3  font-semibold underline">
            <Social socialName="Mail" href={`mailto:${METADATA.social.email}`} />
            <Social socialName="GitHub" href={METADATA.social.github} />
            <Social socialName="Resume" href={METADATA.social.resume} />
          </div>

          <div className="mb-3  text-gray-400">
            <span>{`${METADATA.author} • © ${new Date().getFullYear()} • `}</span>
            <Link href="/">{METADATA.meta.title}</Link>
          </div>

          <div className=" text-gray-400 hover:underline">
            <a href={METADATA.repo}>GitHub Repository</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
