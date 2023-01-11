import { IconSearch } from './Icon';

type Props = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchContainer = ({ handleInputChange }: Props) => {
  return (
    <div className="relative mt-5">
      <input
        type="text"
        placeholder="Search atricles"
        onChange={handleInputChange}
        className="block w-full px-4 py-2 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none"
      />
      <IconSearch />
    </div>
  );
};

export default SearchContainer;
