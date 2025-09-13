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
            데이터를 통해 <span>서비스에 가치를 더하고</span>, <span>활용 가능한 맞춤형 데이터를 구축</span>하는 <span>데이터 엔지니어</span>입니다.
          </p>
        </Animate>
        <p className={styles.intro}>
        {[
          `안녕하세요, 서비스를 만들 수 있도록 맞춤 데이터를 구축하여 제공하고, 구축한 데이터가 활용 가능한지 검증하기 위해 LLM/RAG 및 MCP 개발을 하는 `,
          <span className={styles.withColor}>데이터 엔지니어 이유송</span>,
          `입니다.`,
          <br />,
          '데이터 수집과 가공 과정에서 ',
          <span className={styles.codeBlock}>데이터 품질 관리</span>,
          '를 가장 중요한 가치로 두고 있습니다. ',
          <span className={styles.codeBlock}>HDFS</span>,
          '를 활용해 데이터를 수집하고 분산 처리하며, ',
          <span className={styles.codeBlock}>Apache Airflow</span>,
          '를 통해 수집·변환·적재 과정을 자동화했습니다. ',
          '또한 ',
          <span className={styles.codeBlock}>FastAPI</span>,
          '와 ',
          <span className={styles.codeBlock}>Elasticsearch</span>,
          '를 통해 데이터를 서비스에서 활용 가능한 형태로 제공하고, 직접 ',
          <span className={styles.codeBlock}>임베딩(Embedding)</span>,
          '을 진행해 ',
          <span className={styles.codeBlock}>벡터 DB</span>,
          '에 적재한 뒤 ',
          <span className={styles.codeBlock}>RAG(Retrieval-Augmented Generation)</span>,
          ' 기반 챗봇을 개발하여 데이터 검증까지 수행했습니다. ',
          '또한 ',
          <span className={styles.codeBlock}>Docker</span>,
          '를 활용해 데이터 파이프라인과 애플리케이션을 컨테이너화하고 배포한 경험이 있습니다. ',
          '저는 ',
          <span className={styles.codeBlock}>서비스 개발에 바로 활용할 수 있는 데이터 환경</span>,
          '을 만드는 것을 가장 중요한 책임으로 생각합니다.',
        ].map((e, i) => React.createElement('span', { key: `text-${i}` }, e))}
        </p>
      </div>
    </div>
  );
});

export default AboutMe;
