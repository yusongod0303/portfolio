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
           <span className={styles.keyword}>while</span>,
           ' (',
           <span className={styles.variable}>passion</span>,
           ' > ',
           <span className={styles.number}>0</span>,
           '):',
           <br />,
           <span className={styles.function}>&nbsp;&nbsp;&nbsp;&nbsp;experiment</span>,
           '()',
           <br />,
           <span className={styles.function}>&nbsp;&nbsp;&nbsp;&nbsp;fail</span>,
           '()',
           <br />,
           <span className={styles.function}>&nbsp;&nbsp;&nbsp;&nbsp;learn</span>,
           '()',
           <br />,
           <span className={styles.function}>&nbsp;&nbsp;&nbsp;&nbsp;succeed</span>,
           '()',
          ].map((e, i) => React.createElement('span', { key: `code-${i}` }, e))}
        </div>
      </div>
      <div className={styles.introWrapper}>
        <Animate translateX={toggled ? 0 : -width} friction={80} tension={500}>
          <p className={styles.mainPoint}>
            다양한 프로젝트 경험으로 <span>데이터를 탐구하며</span>, <span>효율적인 솔루션</span>을 고민하는 과정에서 <span>흥미</span>를 느끼고, 
            지속적으로 <span>성장</span>하는 <span>데이터 분석가 & 엔지니어</span> 입니다.
          </p>
        </Animate>
        <p className={styles.intro}>
          {[
            `안녕하세요, 데이터 분석가 및 엔지니어를 꿈꾸는 `,
            <span className={styles.withColor}>이유송</span>,
            `입니다. `,
            <br/>,
            `다양한 `,
            <span className={styles.codeBlock}>빅데이터 분석</span>,
            ' 및 ',
            <span className={styles.codeBlock}>데이터 엔지니어링</span>,
            '프로젝트를 수행하며, 데이터의 흐름을 이해하고 최적화하는 과정에서 흥미를 느껴왔습니다. ',
            '새로운 기술을 학습하고, 팀원들과 협력하여 ',
            <span className={styles.codeBlock}>실제 문제를 해결하는 경험</span>,
            '을 통해 성장하고 있으며, 빠르게 변화하는 업계에서 지속적으로 도전하며 역량을 키워나가고 있습니다. ',
            '또한, 팀 프로젝트에서 팀장을 맡아 기획부터 개발, 배포까지 전 과정에서 주도적으로 참여하며 ',
            <span className={styles.codeBlock}>협업과 리더십</span>,
            '을 경험하였습니다. ',
            '기업의 데이터 환경을 더 효율적으로 만들고, ', 
            <span className={styles.codeBlock}>가치 있는 인사이트를 도출</span>,
            `하는데 기여하고 싶습니다.`,
          ].map((e, i) => React.createElement('span', { key: `text-${i}` }, e))}
        </p>
      </div>
    </div>
  );
});

export default AboutMe;
