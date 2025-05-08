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
            데이터를 통해 <span>현실적인 인사이트를 도출</span>하고, <span>안정적인 데이터 시스템을 구축</span>해온 신입 <span>데이터 엔지니어</span>입니다.
          </p>
        </Animate>
        <p className={styles.intro}>
        {[
          `안녕하세요, 데이터를 안정적으로 흐르게 만드는 일에 가치를 느끼고, 실질적인 개선을 고민하는`,
          <span className={styles.withColor}>데이터 엔지니어 이유송</span>,
          `입니다.`,
          <br />,
          `데이터 수집과 흐름을 설계할 때 `,
          <span className={styles.codeBlock}>Data Quality와 Observability</span>,
          '를 중요하게 생각하고, ',
          <span className={styles.codeBlock}>Data drift나 오류 탐지</span>,
          '에도 꾸준히 관심을 가지고 공부하고 있습니다. ',
          '요즘엔 ',
          <span className={styles.codeBlock}>Hadoop, Spark</span>,
          '같은 분산 처리 기술이나 ',
          <span className={styles.codeBlock}>Kafka</span>,
          '와 같은 실시간 데이터 스트리밍 플랫폼',  
          <span className={styles.codeBlock}>Apache NiFi, Apache Airflow</span>,
          '처럼 데이터 흐름을 자동화하고 제어할 수 있는 도구도 학습하고 있습니다.',
          <span className={styles.codeBlock}>ELK Stack</span>,
          '을 활용한 로그 기반 데이터 수집 및 모니터링 환경 구성에도 관심을 갖고 공부하고 있습니다. ',
          <span className={styles.codeBlock}>신뢰할 수 있는 데이터 환경을 만드는 걸 가장 기본이자 중요한 책임이라고 생각합니다.</span>,
        ].map((e, i) => React.createElement('span', { key: `text-${i}` }, e))}
        </p>
      </div>
    </div>
  );
});

export default AboutMe;
