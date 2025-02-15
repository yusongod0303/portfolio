import React from 'react';
import { NavEnum } from '../../data';
import { ActivityContent, ActivityContentItem } from './model';
import styles from './style.module.less';

const Activities = React.forwardRef<HTMLDivElement>((props, ref) => {
  const renderList = (items: ActivityContentItem[], idx?: number) => {
    return (
      <ul className={styles.desc}>
        {items.map((e, i) =>
          React.createElement(
            'li',
            { key: `${idx}-${i}` },
            e.link ? (
              <a href={e.link} target="_blank" rel="noopener noreferrer">
                {e.content}
              </a>
            ) : (
              e.content
            ),
          ),
        )}
      </ul>
    );
  };

  const renderActivity = (content: ActivityContent) => {
    return (
      <div className={styles.activityWrapper} key={content.idx}>
        <div className={styles.titleBox}>
          <div>
            <div className={styles.title}>{content.title}</div>
            <div className={styles.subTitle}>{content.subTitle}</div>
          </div>
          <div>
            <div className={styles.datePeriod}>{content.datePeriod}</div>
          </div>
        </div>
        <div className={styles.activity}>
          {Array.isArray(content.desc) ? (
            renderList(content.desc, content.idx)
          ) : (
            <p className={styles.desc}>{content.desc}</p>
          )}
        </div>
      </div>
    );
  };

  const contentList: ActivityContent[] = [
    {
      datePeriod: '',
      title: '자격증 획득',
      subTitle: '획득한 자격증 목록:',
      desc: [
        {
          content: '정보처리기사 (Jun 2024)',
          link: '',
        },
        {
          content: 'SQL 개발자 - SQLD (Sep 2024)',
          link: '',
        },
        {
          content: '데이터 분석 준전문가 - ADsP (Sep 2024)',
          link: '',
        },
      ],
    },
    {
      datePeriod: 'Jul 2024 - Jan 2025',
      title: 'LG U+ WHY NOT SW CAMP 빅데이터&클라우드 2기',
      subTitle: '빅데이터 분석 서비스 기획 및 설계, 클라우드 내 데이터 수집/분석/시각화',
      desc: [
        {
          content: '클라우드 기초 지식, Python 프로그래밍, 통계 기본 지식 학습',
          link: '',
        },
        {
          content: 'Python을 활용한 데이터 분석 및 시각화, 머신러닝 및 딥러닝 알고리즘 기초 학습',
          link: '',
        },
        {
          content: 'Docker 및 AWS를 활용한 클라우드 환경 구축 및 Git 협업 관리 학습',
          link: '',
        },
        {
          content: 'Brightics AI 및 Python을 활용한 데이터 분석 미니 프로젝트 진행',
          link: '',
        },
        {
          content: '네이버 지도 크롤링을 통한 음식점 추천 서비스 개발 및 배포',
          link: '',
        },
        {
          content: 'LangChain과 RAG 기반 AI 상담원 개발 프로젝트 수행',
          link: '',
        },
        {
          content: 'TV 홈쇼핑 주제로 한 홈쇼핑 상품 추천 서비스 개발',
          link: '',
        },
      ],
    },
    {
      datePeriod: 'Jun 2023 - Aug 2023',
      title: '하계 학기 실습제 인턴쉽 - (주)유비온',
      subTitle: '에듀테크 기술 조사 및 PPT 제작 및 발표, 강의 데이터 분석 및 시각화',
      desc: [
        {
          content: '강의 데이터 마이그레이션 및 LMS, 챗봇, LLM 관련 최신 기술 조사 PPT 제작 및 발표',
          link: '',
        },
        {
          content: '특정 대학 강의 간 상관관계 분석 및 네트워크 맵 제작',
          link: '',
        },
        {
          content: 'Python(NetworkX, Matplotlib)을 활용한 강의 간 연관성 시각화',
          link: '',
        },
      ],
    },
    {
      datePeriod: 'Sep 2022',
      title: '제10회 공공데이터 활용 비즈니스 아이디어 공모전 - 빅데이터 분석 장려상',
      subTitle: '신재생 에너지 설비(접속반) 건전성 평가 모델 개발',
      desc: [
        'Python을 활용하여 1분 및 10분 단위의 접속반 데이터와 날씨 데이터를 전처리하고, 변수 간 상관관계를 분석 및 시각화하였습니다.',
        '랜덤포레스트와 선형 회귀 모델을 비교 분석한 후, 과대 적합 문제를 고려하여 최적 모델(선형 회귀)을 선정하였습니다.',
        '현재 날씨 데이터와 30분 뒤 접속반 데이터를 활용하여 특정 온도를 기준으로 주의, 경고, 위험 단계로 분류하는 모델을 개발하였습니다.',
        '기존 사후 관리 방식에서 예측 기반 유지보수 시스템으로 개선하여 설비 운영의 안정성을 강화하였습니다.'
      ].join(' '),
    },
  ];

  return (
    <div id={NavEnum.Activities} className={styles.wrapper} ref={ref}>
      <h2 className={styles.header}>Activities</h2>
      <div className={styles.activityList}>
        {contentList.map((c, idx) => renderActivity({ ...c, idx }))}
      </div>
    </div>
  );
});

export default Activities;
