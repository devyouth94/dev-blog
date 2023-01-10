import { GetStaticProps } from 'next';
import { allPosts, Post } from 'contentlayer/generated';
import PageTitle from 'components/PageTitle';
import PostsContainer from 'components/PostsContainer';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
  const MAX_DISPLAY = 5;
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      posts: posts.slice(0, MAX_DISPLAY),
    },
  };
};

type Props = {
  posts: Post[];
};

const Home = ({ posts }: Props) => {
  return (
    <>
      <PageTitle title="최신 포스트" />

      <PostsContainer posts={posts} />

      <div className="flex justify-end py-5">
        <Link
          href="/blog"
          className="text-orange-500 hover:text-orange-600 hover:underline dark:hover:text-orange-400"
        >
          모든 포스트 &rarr;
        </Link>
      </div>
    </>
  );
};

export default Home;
