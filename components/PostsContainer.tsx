import { Post } from 'contentlayer/generated';
import PostsCard from './PostsCard';

type Props = {
  posts: Post[];
};

const PostsContainer = ({ posts }: Props) => {
  return (
    <ul className="flex flex-col items-center divide-y divide-gray-200 dark:divide-gray-700">
      {!posts.length && <span className="py-10 font-semibold">포스트가 없습니다.</span>}

      {posts.map(({ date, title, tags, summary, slug }, idx) => (
        <PostsCard key={idx} date={date} title={title} tags={tags} summary={summary} slug={slug} />
      ))}
    </ul>
  );
};

export default PostsContainer;
