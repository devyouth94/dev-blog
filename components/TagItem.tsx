import Link from 'next/link';

const TagItem = ({ tag }: { tag: string }) => {
  const newTag = tag.split(' ').join('-');

  return (
    <Link
      href={`/tags/${newTag}`}
      className="mr-3 text-sm font-medium uppercase text-orange-400 hover:text-orange-500"
    >
      &#35;{newTag}
    </Link>
  );
};

export default TagItem;
