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
            데이터를 활용한 <span>모델링</span>과 <span>데이터 엔지니어링</span>을 경험하며 성장하고 있는  
            신입 <span>데이터 사이언티스트 & ML 엔지니어</span>입니다.<br />
            데이터 수집부터 전처리, 모델링, 파이프라인 구축까지 다양한 기술을 학습하고 프로젝트를 수행하며  
            <span>분석과 모델 개발, 자동화</span> 역량을 키워왔습니다.
          </p>
        </Animate>
        
        <p className={styles.intro}>
          {[
            `안녕하세요, 머신러닝과 데이터 엔지니어링을 함께 탐구하며 성장하고 있는 `,
            <span className={styles.withColor}>이유송</span>,
            `입니다. `,
            <br />,
            `데이터를 활용한 문제 해결에 흥미를 가지고 있으며, `,
            <span className={styles.codeBlock}>모델링 및 데이터 처리</span>,
            ' 경험을 쌓아왔습니다. ',
            'ETL 파이프라인 구축, ',
            <span className={styles.codeBlock}>Airflow</span>,
            ' 활용 자동화, ',
            <span className={styles.codeBlock}>Docker</span>,
            '를 이용한 환경 구성 및 배포 경험이 있으며, ',
            <span className={styles.codeBlock}>MongoDB</span>,
            '를 활용한 데이터 저장 및 처리 경험을 갖추고 있습니다. ',
            '또한, 다양한 프로젝트를 수행하며 ',
            <span className={styles.codeBlock}>머신러닝 모델링</span>,
            '을 통해 데이터를 분석하고 의미 있는 인사이트를 도출하는 과정에서 많은 배움을 얻었습니다. ',
            '팀 프로젝트에서 기획부터 데이터 수집, 모델 개발, 분석, 자동화까지 전반적인 과정을 수행하며 ',
            <span className={styles.codeBlock}>협업</span>,
            '을 경험하였고, ',
            <span className={styles.codeBlock}>데이터 기반 의사결정</span>,
            '에 기여할 수 있는 역량을 키워가고 있습니다. ',
            "ML 엔지니어와 데이터 사이언티스트로서 성장하며, ",
            <span className={styles.codeBlock}>실제 서비스 적용 가능한 모델 개발 및 데이터 파이프라인 구축</span>,
            "에 도전하고 싶습니다."
          ].map((e, i) => React.createElement('span', { key: `text-${i}` }, e))}
        </p>
      </div>
    </div>
  );
});

export default AboutMe;
