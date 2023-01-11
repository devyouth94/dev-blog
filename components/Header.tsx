import METADATA from 'constants/METADATA';
import NAV_LINK from 'constants/NAV_LINK';
import Link from 'next/link';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-7 mb-3">
      <Link href="/" className="text-2xl font-bold gradient-title">
        {METADATA.headerTitle}
      </Link>

      <div className="flex items-center">
        <nav className="hidden sm:block">
          {NAV_LINK.map((link) => (
            <Link href={link.href} key={link.title} className="font-medium hover:underline sm:p-4">
              {link.title}
            </Link>
          ))}
        </nav>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
