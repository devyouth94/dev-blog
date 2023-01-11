import PageTitle from 'components/PageTitle';
import PostsContainer from 'components/PostsContainer';
import SearchContainer from 'components/SearchContainer';
import { allPosts, Post } from 'contentlayer/generated';
import useSearchValue from 'lib/hooks/useSearchValue';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      posts,
    },
  };
};

type Props = {
  posts: Post[];
};

const Blog = ({ posts }: Props) => {
  const { searchValue, handleInputChange } = useSearchValue();

  const searchedPosts = posts.filter((post) => {
    const keyword = `${post.title} ${post.summary} ${post.tags.join(' ')}`;
    return keyword.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <PageTitle title="Blog" desc="개발 관련 공유하고 싶은 내용을 포스팅합니다." />

      <SearchContainer handleInputChange={handleInputChange} />

      <PostsContainer posts={searchedPosts} />
    </>
  );
};

export default Blog;
