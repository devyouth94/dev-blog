import Link from 'next/link';

type Props = {
  href: string;
  text: string;
};

const ArrowNav = ({ href, text }: Props) => {
  return (
    <div className="flex justify-end py-5">
      <Link href={href} className="text-orange-400 hover:text-orange-500 hover:underline">
        {text}
      </Link>
    </div>
  );
};

export default ArrowNav;
