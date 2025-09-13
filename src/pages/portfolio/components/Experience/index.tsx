import React from 'react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Animate } from 'react-rebound';
import { NavEnum } from '../../data';
import styles from './style.module.less';
import { ExperienceContent } from './model';

export interface ExperienceProps {
  toggled?: boolean;
  width?: number;
}

const Experience = React.forwardRef<HTMLDivElement, ExperienceProps>((props, ref) => {
  const { toggled = false, width = 0 } = props;

  const renderExperience = (content: ExperienceContent) => {
    return (
      <div className={styles.experienceWrapper} key={content.idx}>
        <Animate
          translateX={toggled ? 0 : -width}
          friction={80}
          tension={500}
          delay={(content?.idx || 0) * 300}
        >
          <div className={styles.datePeriod}>{content.datePeriod}</div>
        </Animate>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
        </div>
        <Animate
          translateX={toggled ? 0 : width}
          friction={80}
          tension={500}
          delay={(content?.idx || 0) * 300}
        >
          <div className={styles.experience}>
            <div className={styles.title}>{content.title}</div>
            <div className={styles.subTitle}>{content.subTitle}</div>
            <div className={styles.desc}>{content.desc}</div>
            {content.projects && (
              <div className={styles.projectList}>
                <span>수행 프로젝트 목록</span>
                <ul>
                  {content!.projects.map((e, i) =>
                    React.createElement('li', { key: `project-${i}` }, e.title),
                  )}
                </ul>
              </div>
            )}
          </div>
        </Animate>
      </div>
    );
  };

  const contentList: ExperienceContent[] = [
    {
      datePeriod: 'May 2025 - Current',
      title: '유비벨록스(주)',
      subTitle: 'Data Engineer',
      desc: [
        '특정 기간 출결 로그 데이터 파이프라인 자동화 & 출결 챗봇 개발',
        '도서관 데이터 구축 & 도서관 챗봇 개발',
        'AI 세미나 진행',
        'PDF 문서 추출 및 ES 로드 & 사내 문서 챗봇 개발'
      ].join(' '),
    },
    {
      datePeriod: 'October 2024 - November 2024',
      title: '식스티헤르츠(주)',
      subTitle: '인공지능(AI) 학습용 데이터 분류ㆍ추출 / 용역',
      desc: ['RAG 및 Langchain 학습을 위한 보고서 데이터를 분류 및 핵심 키워드 추출 작업을 진행하였습니다.'].join(' '),
    },
    {
      datePeriod: 'June 2023 – August 2023',
      title: '(주)유비온',
      subTitle: '기획 및 데이터 분석 / 인턴',
      desc: [
        '강의 데이터 마이그레이션 진행 및 챗봇, lms 에듀테크, LLM 등 다양한 도메인 조사 및 PPT 제작 후 발표와,',
        'Python을 활용한 네트워크 맵 시각화 프로젝트를 진행하였습니다.',
      ].join(' '),
      projects: [
        {
          title: '수강신청 데이터를 이용한 모 대학 강의의 상관 관계 분석을 위한 네트워크 맵 제작',
        },
      ],
    },
    {
      datePeriod: 'May 2022 – January 2025',
      title: '작은 경험에서 시작된 데이터 여정',
      subTitle: '분석, 모델링, ETL 파이프라인 구축 등 다양한 프로젝트 수행',
      desc: [
        '2022년, 데이터를 통해 더 나은 세상을 만드는 데에 흥미를 느끼며 프로젝트와 공모전에 참여하기 시작했습니다.',
        '데이터를 수집하고 다듬으며 문제를 정의하고 해결하는 경험을 반복하며, 점차 데이터의 흐름과 구조에 대한 이해를 넓혀갈 수 있었습니다.',
      ].join(' '),
      projects: [
        {
          title: '트렌드 기반 홈쇼핑 상품 추천 서비스',
        },
        {
          title: '지역 축제 성과 지표 개발',
        },
        {
          title: '화력발전 배연ㆍ탈황 공정의 석회석 주입량 저감 최적화 모델 개발',
        },
        {
          title: '신재생 에너지(태양열) 설비(접속반) 건전성 평가 모델 개발',
        },
      ],
    },
  ];

  return (
    <div id={NavEnum.Experience} className={styles.wrapper} ref={ref}>
      <h2 className={styles.header}>Experience</h2>
      <div className={styles.experienceList}>
        {contentList.map((c, idx) => renderExperience({ ...c, idx }))}
      </div>
    </div>
  );
});

export default Experience;


export {};