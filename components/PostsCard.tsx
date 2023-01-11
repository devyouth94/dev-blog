import dateFormat from 'lib/utils/dateFormat';
import Link from 'next/link';
import TagItem from './TagItem';

type Props = {
  date: string;
  title: string;
  tags: string[];
  summary: string;
  slug: string;
};

const PostsCard = ({ date, title, tags, summary, slug }: Props) => {
  return (
    <li className="flex flex-col gap-1 items-start py-10 w-full">
      <time className="text-sm text-gray-400">{dateFormat(date)}</time>

      <h2 className="text-2xl font-bold post-title">
        <Link href={`/blog/${slug}`} className="post-underline">
          {title}
        </Link>
      </h2>

      <article>
        {tags.map((tag, idx) => (
          <TagItem key={idx} tag={tag} />
        ))}
      </article>

      <article className="mt-5 text-gray-500 dark:text-gray-400">{summary}</article>
    </li>
  );
};

export default PostsCard;
