import getIntersectionObserver from 'lib/utils/getIntersectionObserver';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Toc = () => {
  const { pathname } = useRouter();

  const [currentId, setCurrentId] = useState('');
  const [headEls, setHeadEls] = useState<Element[]>([]);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const els = Array.from(document.querySelectorAll('section > h1, section > h2, section > h3'));

    setHeadEls(els);

    els.map((heading) => {
      observer.observe(heading);
    });
  }, [pathname]);

  return (
    <div className="absolute top-0 left-full h-full hidden xl:block">
      <div className="fixed pl-[60px] pr-10">
        {headEls.map((head, idx) => (
          <div
            key={idx}
            className={`py-[2.5px] ${
              head.nodeName === 'H1' ? 'toc-h1' : head.nodeName === 'H2' ? 'toc-h2' : 'toc-h3'
            } ${currentId === head.id ? 'text-orange-500' : 'text-gray-500'}`}
          >
            <a href={`#${head.id}`}>
              {head.nodeName === 'H3' && '• '}
              {head.textContent}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toc;
