import React, { forwardRef } from 'react';
import { NavEnum } from '../../data';
import styles from './style.module.less';

const ProjectImage1 = require('../../../../images/projects/Solar.png').default;
const ProjectImage2 = require('../../../../images/projects/network.png').default;
const ProjectImage3 = require('../../../../images/projects/SOx.png').default;
const ProjectImage4 = require('../../../../images/projects/popular.png').default;
const ProjectImage5 = require('../../../../images/projects/homeshopping.png').default;

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  startDate: string;
  endDate: string;
  tags: string[];
  role: string;
}

export interface ProjectsProps {
  toggled?: boolean;
  width?: number;
}

const projectList: Project[] = [
  {
    id: 1,
    title: '신재생 에너지(태양열) 설비(접속반)\n 건전성 평가 모델 개발',
    description: '제 10회 공공데이터 활용 비즈니스 아이디어 공모전 - 빅데이터 분석 부문 (장려상)',
    imageUrl: ProjectImage1,
    githubUrl: 'https://github.com/yusongod0303/Solar-Junction-Box-Reliability-Assessment',
    startDate: '2022/04/01',
    endDate: '2022/07/31',
    tags: ['3인 프로젝트', '랜덤포레스트', '다중 회귀 분석'],
    role: '데이터 전처리 담당 \n 모델링(다중 회귀 분석·랜덤 포레스트) 공동 수행'
  },
  {
    id: 2,
    title: '수강신청 데이터를 이용한\n 특정 대학 강의의 상관 관계 분석을 위한\n 네트워크 맵 제작',
    description: '2023 하계 학기 인턴쉽 - (주)유비온',
    imageUrl: ProjectImage2,
    githubUrl: 'https://github.com/yusongod0303/networkmap_2023_08',
    startDate: '2023/08/10',
    endDate: '2023/08/18',
    tags: ['단독 프로젝트', '상관관계 분석', '데이터 시각화', 'NetworkX'],
    role: ' 데이터 분석 및 네트워크 맵 시각화'
  },
  {
    id: 3,
    title: '석회석 주입량 최적화 모델 개발',
    description: '제 12회 공공데이터 활용 비즈니스 아이디어 공모전 - 빅데이터 분석 부문',
    imageUrl: ProjectImage3,
    githubUrl: 'https://github.com/yusongod0303/Optimized-Limestone-Injection-for-SOx-Reduction',
    startDate: '2024/04/01',
    endDate: '2024/07/31',
    tags: [ '2인 프로젝트', '대푯값을 활용한 선형 그래프', '통계적 접근 활용', '선형성 이용'],
    role: '데이터 전처리 및 대시보드 생성\n 분석·모델 개발·성과 도출 전 과정 공동 참여',
  },
  {
    id: 4,
    title: '유동인구 데이터를 활용한 지역 축제 성과 지표 개발',
    description: '빅콘테스트 2024 - 공모전',
    imageUrl: ProjectImage4,
    githubUrl: 'https://github.com/yusongod0303/Festival-Flow-Metrics',
    startDate: '2024/10/10',
    endDate: '2025/11/15',
    tags: ['4인 프로젝트', 'MySQL', '거리 기반 가중치', '로그 스케일', 'Min-Max Scaler'],
    role: '유동인구 데이터를 분석(통신 OD 데이터)\n 축제 기간 외부 유입도 성과 지표 개발',
  },
  {
    id: 5,
    title: '트렌드 기반 홈쇼핑 상품 추천 서비스',
    description: 'LG U+ WHY NOT SW CAMP - 프로젝트',
    imageUrl: ProjectImage5,
    githubUrl: 'https://github.com/yusongod0303/LGU_LAST_PJ',
    startDate: '2024/11/28',
    endDate: '2025/01/25',
    tags: ['6인 프로젝트 - 팀장', '크롤링', 'DB 모델링', '인프라 구축', 'ETL', 'FastText', '배포'],
    role: '기획, 데이터 파이프라인\n 인프라 구축\n 단어 임베딩 모델 개발',
  },
];

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(({ toggled, width }, ref) => {
  return (
    <div id={NavEnum.Projects} ref={ref} className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.header}>Projects</h2>
      </div>

      <div className={styles.projectGrid}>
        {projectList.map((project) => (
          <div className={styles.projectCard} key={project.id}>
            <img src={project.imageUrl} alt={project.title} className={styles.projectImage} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDate}>📅 {project.startDate} ~ {project.endDate}</p>
              <div className={styles.projectTags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.projectTag}>{tag}</span>
                ))}
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              <p className={styles.projectRole}><strong>담당 역할:</strong> {project.role}</p>
              <div className={styles.projectFooter}>
                <hr className={styles.sectionDivider} />
                <a href={project.githubUrl} target="_blank" className={styles.projectGithubLink}>🔗 프로젝트 보러 가기(GitHub)</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;