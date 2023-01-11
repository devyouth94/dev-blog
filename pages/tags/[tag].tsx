import PageTitle from 'components/PageTitle';
import PostsContainer from 'components/PostsContainer';
import SearchContainer from 'components/SearchContainer';
import { allPosts, Post } from 'contentlayer/generated';
import useSearchValue from 'lib/hooks/useSearchValue';
import getAllTags from 'lib/utils/getAllTags';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags(allPosts);

  return {
    paths: Object.keys(tags).map((tag) => ({ params: { tag } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = String(params?.tag).split('-').join(' ');
  const posts = allPosts.filter((post) => post.tags.includes(tag));

  return {
    props: {
      posts,
      tag,
    },
  };
};

const TagResult = ({ posts, tag }: { posts: Post[]; tag: string }) => {
  const { searchValue, handleInputChange } = useSearchValue();

  const searchedPosts = posts.filter((post) => {
    const keyword = `${post.title} ${post.summary} ${post.tags.join(' ')}`;
    return keyword.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <PageTitle title={tag} desc="태그를 포함한 포스트입니다." />

      <SearchContainer handleInputChange={handleInputChange} />

      <PostsContainer posts={searchedPosts} />
    </>
  );
};

export default TagResult;
