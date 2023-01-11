import { GetStaticProps } from 'next';
import { allPosts, Post } from 'contentlayer/generated';
import PageTitle from 'components/PageTitle';
import PostsContainer from 'components/PostsContainer';
import ArrowNav from 'components/ArrowNav';
import IndexProfile from 'components/IndexProfile';

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
      <IndexProfile />

      <PageTitle title="Recent Post" />

      <PostsContainer posts={posts} />

      <ArrowNav href="/blog" text="모든 포스트 →" />
    </>
  );
};

export default Home;
