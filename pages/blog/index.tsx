import { IconSearch } from 'components/Icon';
import PageTitle from 'components/PageTitle';
import PostsContainer from 'components/PostsContainer';
import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';

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
  const [searchValue, setSearchValue] = useState('');

  const searchedPosts = posts.filter((post) => {
    const keyword = `${post.title} ${post.summary} ${post.tags.join(' ')}`;
    return keyword.toLowerCase().includes(searchValue.toLowerCase());
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value.trim().toLowerCase());
  };

  return (
    <>
      <PageTitle title="Blog" desc="개발 관련 공유하고 싶은 내용을 포스팅합니다." />

      <div className="relative mt-5">
        <input
          type="text"
          placeholder="Search atricles"
          onChange={handleInputChange}
          className="block w-full px-4 py-2 rounded-md border border-gray-200 dark:border-gray-600 focus:outline-none"
        />
        <IconSearch />
      </div>

      <PostsContainer posts={searchedPosts} />
    </>
  );
};

export default Blog;
