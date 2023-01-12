import { allPosts, Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { GetStaticPaths, GetStaticProps } from 'next';
import dateFormat from 'lib/utils/dateFormat';
import ScrollButton from 'components/ScrollButton';
import TagItem from 'components/TagItem';
import GiscusContainer from 'components/GiscusContainer';
import Toc from 'components/Toc';
import { NextSeo } from 'next-seo';
import METADATA from 'constants/METADATA';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  return {
    props: {
      post,
    },
  };
};

const BlogPost = ({ post }: { post: Post }) => {
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.summary}
        canonical={`${METADATA.meta.url}/blog/${post.slug}`}
        openGraph={{
          type: 'article',
          url: `${METADATA.meta.url}/blog/${post.slug}`,
          article: {
            publishedTime: new Date(post.date).toISOString(),
            tags: [...post.tags, 'frontend', '프론트엔드', 'develop', '개발'],
          },
        }}
      />

      <div className="relative">
        <header className="flex flex-col items-center pb-14">
          <time className="text-gray-400 mb-4">{dateFormat(post.date)}</time>
          <h2 className="text-4xl text-center font-extrabold mb-4">{post.title}</h2>
          <article>
            {post.tags.map((tag, idx) => (
              <TagItem key={idx} tag={tag} />
            ))}
          </article>
        </header>

        <Toc />

        <section className="prose prose-neutral prose-h1:pt-8 prose-h2:mt-0 max-w-none dark:prose-invert py-14 border-y">
          <MDXComponent />
        </section>

        <GiscusContainer />

        <ScrollButton />
      </div>
    </>
  );
};

export default BlogPost;
