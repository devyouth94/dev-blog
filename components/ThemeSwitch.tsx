import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { IconDark, IconLight } from './Icon';

const ThemeSwitch = () => {
  const [isMount, setIsMount] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMount(true);
  }, []);

  const handleClickToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!isMount) return <></>;

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={handleClickToggle}
      className="h-8 w-8 p-1 sm:ml-2"
    >
      {theme === 'dark' ? <IconLight /> : <IconDark />}
    </button>
  );
};

export default ThemeSwitch;
