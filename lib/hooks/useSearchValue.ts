import { useState } from 'react';

const useSearchValue = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value.trim().toLowerCase());
  };

  return { searchValue, handleInputChange };
};

export default useSearchValue;
