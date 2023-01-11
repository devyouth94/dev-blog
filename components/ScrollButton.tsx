import { useState, useEffect } from 'react';
import { IconComment, IconTopArrow } from './Icon';

const ScrollButton = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  const handleScrollComment = () => {
    document.getElementById('giscus-comment')?.scrollIntoView();
  };

  return (
    <div
      className={`fixed right-14 bottom-14 hidden flex-col gap-3 ${
        isShow ? 'md:flex' : 'md:hidden'
      }`}
    >
      <button type="button" onClick={handleScrollComment} className="scroll-button">
        <IconComment />
      </button>

      <button type="button" onClick={handleScrollTop} className="scroll-button">
        <IconTopArrow />
      </button>
    </div>
  );
};

export default ScrollButton;
