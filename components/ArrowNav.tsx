import Link from 'next/link';

type Props = {
  href: string;
  text: string;
};

const ArrowNav = ({ href, text }: Props) => {
  return (
    <div className="flex justify-end py-5">
      <Link
        href={href}
        className="text-orange-500 hover:text-orange-600 hover:underline dark:hover:text-orange-400"
      >
        {text}
      </Link>
    </div>
  );
};

export default ArrowNav;
