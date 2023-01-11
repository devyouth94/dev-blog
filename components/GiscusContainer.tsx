import Giscus from '@giscus/react';
import METADATA from 'constants/METADATA';

const GiscusContainer = () => {
  return (
    <footer id="giscus-comment" className="pt-10">
      <Giscus
        repo={`${METADATA.giscus.id}/${METADATA.giscus.repo}`}
        repoId="R_kgDOIvuiyA"
        category={METADATA.giscus.category}
        categoryId="DIC_kwDOIvuiyM4CThfw"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="ko"
      />
    </footer>
  );
};

export default GiscusContainer;
