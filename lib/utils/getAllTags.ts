import { Post } from 'contentlayer/generated';

type Tags = {
  [x: string]: number;
};

const getAllTags = (allPosts: Post[]) => {
  const tags: Tags = {};

  allPosts.map((post) => {
    if (post.tags) {
      post.tags.map((tag) => {
        const newTag = tag.split(' ').join('-').toLowerCase();
        if (tags[newTag]) {
          tags[newTag] += 1;
        } else {
          tags[newTag] = 1;
        }
      });
    }
  });

  return tags;
};

export default getAllTags;
