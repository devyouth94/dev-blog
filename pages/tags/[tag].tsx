import ArrowNav from 'components/ArrowNav';
import PageTitle from 'components/PageTitle';
import PostsContainer from 'components/PostsContainer';
import SearchContainer from 'components/SearchContainer';
import METADATA from 'constants/METADATA';
import { allPosts, Post } from 'contentlayer/generated';
import useSearchValue from 'lib/hooks/useSearchValue';
import getAllTags from 'lib/utils/getAllTags';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

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
      <NextSeo
        title={tag}
        description={`키워드 ${tag}를 포함한 포스트 목록입니다.`}
        canonical={`${METADATA.meta.url}/tag/${tag.split(' ').join('-')}`}
      />

      <PageTitle title={tag} desc="태그를 포함한 포스트입니다." />

      <SearchContainer handleInputChange={handleInputChange} />

      <PostsContainer posts={searchedPosts} />

      <ArrowNav href="/tags" text="← 모든 태그" />
    </>
  );
};

export default TagResult;
