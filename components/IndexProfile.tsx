// import { useEffect } from 'react';
import METADATA from 'constants/METADATA';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
// import { useReward } from 'react-rewards';

const IndexProfile = () => {
  // const { reward, isAnimating } = useReward('rewardId', 'confetti', {
  //   angle: 200,
  //   position: 'absolute',
  //   startVelocity: 20,
  //   spread: 90,
  //   elementCount: 80,
  //   lifetime: 150,
  // });

  // useEffect(() => {
  //   reward();
  // }, []);

  return (
    <div className="grid grid-cols-[auto_120px] sm:grid-cols-[auto_180px] mb-5">
      <div>
        <TypeAnimation
          sequence={[`안녕하세요! 김영진입니다.`, 1000, '', 500]}
          speed={10}
          repeat={Infinity}
          wrapper="h1"
          className="text-xl sm:text-3xl font-bold"
        />
        <p className="mt-3 font-sm leading-7 text-neutral-500 dark:text-neutral-200 post-title">
          <span className="post-underline underline">
            <a href={METADATA.social.notion} target="_blank" rel="noreferrer">
              노션
            </a>
          </span>
          에 기록한 개발 관련 내용 중에
          <br />
          공유하고 싶은 글을 다듬어 이 곳에 올립니다.
        </p>
      </div>

      <div
        className="relative h-[120px] sm:h-[180px] cursor-pointer"
        // onClick={isAnimating ? undefined : reward}
      >
        <Image src="/images/mimoji.png" fill alt="mimoji" />
        {/* <div className="absolute top-[100px] left-[-20px]">
          <span id="rewardId" />
        </div> */}
      </div>
    </div>
  );
};

export default IndexProfile;
