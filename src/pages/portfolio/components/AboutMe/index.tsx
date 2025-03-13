import React from 'react';
import { Animate } from 'react-rebound';
import { NavEnum } from '../../data';
import styles from './style.module.less';

export interface AboutProps {
  toggled?: boolean;
  width?: number;
}

const AboutMe = React.forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  const { toggled = false, width = 0 } = props;
  return (
    <div id={NavEnum.About} className={styles.wrapper} ref={ref}>
      <h2 className={styles.header}>About Me</h2>
      <div className={styles.codeWrapper}>
        <div className={styles.code}>
          {[
            <span className={styles.comment}># life motto</span>,
            <br />,
            <span>
              <span className={styles.keyword}>while</span>
              {' '}
              <span className={styles.variable}>passion</span>
              {':'}
            </span>,
            <br />,
            <span className={styles.function}>&nbsp;&nbsp;&nbsp;&nbsp;experiment</span>,
            '()',
            <br />,
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className={styles.keyword}>if</span>
              {' '}
              <span className={styles.function}>fail</span>
              {'():'}
            </span>,
            <br />,
            <span className={styles.function}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;learn</span>,
            '()',
            <br />,
            <span className={styles.function}>&nbsp;&nbsp;&nbsp;&nbsp;succeed</span>,
            '()',
            <br />,
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.variable}>passion</span>
              {' += '}
              <span className={styles.function}>succeed</span>
              {'()'}
            </span>
          ].map((e, i) => React.createElement('span', { key: `code-${i}` }, e))}
        </div>
      </div>
      <div className={styles.introWrapper}>
        <Animate translateX={toggled ? 0 : -width} friction={80} tension={500}>
          <p className={styles.mainPoint}>
            데이터를 통한 <span>인사이트 도출</span>과 <span>모델 개발</span>에 열정을 가진 신입 <span>데이터 사이언티스트</span>입니다.<br />
            신재생 에너지 건전성 평가부터 추천 시스템 개발까지, <span>다양한 도메인</span>에서의 <span>문제 해결 경험</span>을 쌓아왔습니다.
          </p>

        </Animate>
        <p className={styles.intro}>
          {[
            `안녕하세요, 데이터 수집부터 분석, 인사이트 도출 및 모델 개발까지 전체 프로세스를 경험한 `,
            <span className={styles.withColor}>이유송</span>,
            `입니다. `,
            <br/>,
            `신재생 에너지 최적화부터 추천 시스템 개발까지 다양한 프로젝트를 수행하며, 데이터 기반 `,
            <span className={styles.codeBlock}>문제 해결 과정</span>,
            '에서 깊은 흥미를 느껴왔습니다. ',
            <span className={styles.codeBlock}>딥러닝 및 머신러닝 기반 모델 개발</span>,
            '을 통해 실질적인 문제를 해결하며, ',
            <span className={styles.codeBlock}>대용량 데이터 처리 및 최적화</span>,
            ' 경험을 쌓아왔습니다. ',
            '또한, ',
            <span className={styles.codeBlock}>데이터 파이프라인을 구축하여</span>,
            ' 데이터 수집, 전처리, 모델 학습 및 배포를 자동화하며, 효율적인 데이터 흐름을 설계한 경험이 있습니다. ',
            '팀 프로젝트에서 팀장을 맡아 기획부터 개발, 배포까지 전 과정에서 주도적으로 참여하며 ',
            <span className={styles.codeBlock}>협업과 리더십</span>,
            '을 경험하였습니다. ',
            "데이터를 활용한 AI 모델링과 분석을 통해 ",
            <span className={styles.codeBlock}>실질적인 비즈니스 문제를 해결</span>,
            "하고, ",
            <span className={styles.codeBlock}>데이터 기반 의사결정</span>,
            "을 고도화하는데 기여하고 싶습니다."
          ].map((e, i) => React.createElement('span', { key: `text-${i}` }, e))}
        </p>
      </div>
    </div>
  );
});

export default AboutMe;
