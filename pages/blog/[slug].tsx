import { allPosts, Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { GetStaticPaths, GetStaticProps } from 'next';
import dateFormat from 'lib/utils/dateFormat';
import ScrollButton from 'components/ScrollButton';
import TagItem from 'components/TagItem';
import GiscusContainer from 'components/GiscusContainer';
import Toc from 'components/Toc';

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

      <section className="prose prose-neutral max-w-none dark:prose-invert py-14 border-y">
        <MDXComponent />
      </section>

      <GiscusContainer />

      <ScrollButton />
    </div>
  );
};

export default BlogPost;
