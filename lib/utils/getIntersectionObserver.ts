import { Dispatch, SetStateAction } from 'react';

const observerOption = {
  threshold: 0.3,
};

const getIntersectionObserver = (setState: Dispatch<SetStateAction<string>>) => {
  let direction = '';
  let prevYpostion = 0;

  const checkScrollDirection = (prevY: number) => {
    if (window.scrollY === 0 && prevY === 0) return;

    if (window.scrollY > prevY) {
      direction = 'down';
    } else {
      direction = 'up';
    }

    prevYpostion = window.scrollY;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      checkScrollDirection(prevYpostion);

      if (
        (direction === 'down' && !entry.isIntersecting) ||
        (direction === 'up' && entry.isIntersecting)
      ) {
        setState(entry.target.id);
      }
    });
  }, observerOption);

  return observer;
};

export default getIntersectionObserver;
