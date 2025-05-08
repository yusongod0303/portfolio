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
      desc: ['각 종 툴을 활용한 데이터 엔지니어 업무 진행'].join(' '),
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