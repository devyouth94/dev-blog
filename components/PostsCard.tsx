import Link from 'next/link';

type Props = {
  date: string;
  title: string;
  tags: string[];
  summary: string;
  slug: string;
};

const PostsCard = ({ date, title, tags, summary, slug }: Props) => {
  return (
    <li className="flex flex-col items-start py-10 w-full">
      <time className="text-sm text-gray-400">{date}</time>

      <h2 className="text-2xl font-bold hover:underline">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h2>

      <article>
        {tags.map((tag, idx) => {
          const newTag = tag.split(' ').join('-');
          return (
            <Link
              key={idx}
              href={`tags/${newTag}`}
              className="mr-3 text-sm font-medium uppercase text-orange-500 hover:text-orange-600 dark:hover:text-orange-400"
            >
              &#35;{newTag}
            </Link>
          );
        })}
      </article>

      <article className="mt-5 text-gray-500 dark:text-gray-400">{summary}</article>
    </li>
  );
};

export default PostsCard;
