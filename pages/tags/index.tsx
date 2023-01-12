import PageTitle from 'components/PageTitle';
import TagItem from 'components/TagItem';
import METADATA from 'constants/METADATA';
import { allPosts } from 'contentlayer/generated';
import getAllTags from 'lib/utils/getAllTags';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

type Tags = {
  [x: string]: number;
};

export const getStaticProps: GetStaticProps = async () => {
  const tags = getAllTags(allPosts);

  return {
    props: {
      tags,
    },
  };
};

const Tags = ({ tags }: { tags: Tags }) => {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);

  return (
    <>
      <NextSeo
        title="Tags"
        canonical={`${METADATA.meta.url}/tags`}
        openGraph={{ url: `${METADATA.meta.url}/tags` }}
      />

      <PageTitle title="Tags" desc="포스트를 태그별로 확인하세요." />

      <div className="flex flex-wrap gap-5 justify-center mx-auto max-w-lg mt-5">
        {sortedTags.map((tag, idx) => (
          <div key={idx}>
            <TagItem tag={tag} />
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-200 ml-[-10px]">{`(${tags[tag]})`}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tags;
