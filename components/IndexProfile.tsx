import METADATA from 'constants/METADATA';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const IndexProfile = () => {
  return (
    <div className="flex justify-between mb-5">
      <div>
        <TypeAnimation
          sequence={[`안녕하세요! 김영진입니다.`, 1000, '', 500]}
          speed={10}
          repeat={Infinity}
          wrapper="h1"
          className="text-3xl font-bold"
        />
        <p className="mt-3 font-sm leading-7 text-neutral-500 dark:text-neutral-200 post-title">
          <span className="post-underline">
            <a href={METADATA.social.notion} target="_blank" rel="noreferrer">
              개인 노션
            </a>
          </span>
          에 기록한 개발 관련 내용 중에
          <br />
          공유하고 싶은 글을 다듬어 이 곳에 올립니다.
        </p>
      </div>
      <Image src="/images/mimoji.png" width={180} height={180} alt="mimoji" />
    </div>
  );
};

export default IndexProfile;