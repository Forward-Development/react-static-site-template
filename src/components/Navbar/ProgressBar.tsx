import React from 'react';
import { useNProgress } from '@tanem/react-nprogress';

export const Container: React.FC<{
  animationDuration: number;
  isFinished: boolean;
  children: React.ReactNode;
}> = ({ animationDuration, children, isFinished }) => (
  <div
    style={{
      opacity: isFinished ? 0 : 1,
      pointerEvents: 'none',
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
);

export const Bar: React.FC<{
  animationDuration: number;
  progress: number;
}> = ({ animationDuration, progress }) => (
  <div
    className="fixed left-0 top-0 z-50 h-[2px] w-full bg-[#29d]"
    style={{
      marginLeft: `${(-1 + progress) * 100}%`,
      transition: `margin-left ${animationDuration}ms linear`,
    }}
  >
    <div
      className="absolute right-0 block h-full w-[100px] opacity-100"
      style={{
        boxShadow: '0 0 10px #29d, 0 0 5px #29d',
        transform: 'rotate(3deg) translate(0px, -4px)',
      }}
    />
  </div>
);

const Progress: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  );
};

export default Progress;
