import React from 'react';
import { NavEnum } from '../../data';
import { SkillItem, SkillSet, SkillProficiency } from './model';
import styles from './style.module.less';
import { Python, Bash, SQL, Java } from './components/Language';
import { ReactJS, Airflow, Fastapi, Flask } from './components/Framework';
import { Oracle, Mysql, Mongo } from './components/Database';
import { Git, Docker, Kubernetes, AWS, Tableau, Openai, Selenium } from './components/OtherSkill';

const skillSets: SkillSet[] = [
  {
    title: 'Language',
    items: [
      {
        title: 'Python',
        imageNode: <Python id="python" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#주 언어, 데이터 분석 및 모델링'],
      },
      {
        title: 'SQL',
        imageNode: <SQL id="SQL" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#query 문으로 원하는 데이터 추출'],
      },
      {
        title: 'Bash',
        imageNode: <Bash id="bash" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#컨테이너 및 파이프라인 관리'],
      },
    ],
  },
  {
    title: 'Framework',
    items: [
      {
        title: 'Apache Airflow',
        imageNode: <Airflow id="airflow" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#데이터 파이프라인 구축 및 관리'],
      },
      {
        title: 'Fastapi',
        imageNode: <Fastapi id="fastapi" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#로그 데이터 DB구축, 웹 애플리케이션 및 추천 시스템 구축'],
      },
      {
        title: 'Flask',
        imageNode: <Flask id="flask" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#데이터 시각화 대시보드 생성'],
      },
    ],
  },
  {
    title: 'Database',
    items: [
      {
        title: 'Mongo',
        imageNode: <Mongo id="mongo" />,
      },
      {
        title: 'Oracle',
        imageNode: <Oracle id="oracle" />,
      },
      {
        title: 'MySQL',
        imageNode: <Mysql id="mysql" />,
      },
    ],
  },
  {
    title: 'Tools',
    items: [
      {
        title: 'Git',
        imageNode: <Git id="git" />,
        proficiency: SkillProficiency.Familiar,
        tags: [],
      },
      {
        title: 'Docker',
        imageNode: <Docker id="docker" />,
        proficiency: SkillProficiency.Familiar,
        tags: [],
      },
      {
        title: 'AWS',
        imageNode: <AWS id="aws" />,
        proficiency: SkillProficiency.Familiar,
        tags: [],
      },
      {
        title: 'Openai API',
        imageNode: <Openai id="openai" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#RAG 생성 및 Feature Engineering에 활용'],
      },
      {
        title: 'Selenium',
        imageNode: <Selenium id="selenium" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#데이터 수집 - 크롤링'],
      },
    ],
  },
];

const Skills = React.forwardRef<HTMLDivElement>((props, ref) => {
  const renderSkillItem = (item: SkillItem, key: number) => {
    return (
      <div className={styles.skillItem} key={`item-${key}`}>
        {React.cloneElement(item.imageNode, {
          iconName: item.title,
          proficiency: item.proficiency,
          tags: item.tags,
        })}
      </div>
    );
  };
  const renderSkillSet = (set: SkillSet, key: number) => {
    return (
      <div className={styles.skillSet} key={`set-${key}`}>
        <h3>{set.title}</h3>
        <div>{set.items.map((e, i) => renderSkillItem(e, i))}</div>
      </div>
    );
  };

  return (
    <div id={NavEnum.Skills} className={styles.wrapper} ref={ref}>
      <h2 className={styles.header}>Skills</h2>
      <div className={styles.skillSetList}>{skillSets.map((e, i) => renderSkillSet(e, i))}</div>
    </div>
  );
});

export default Skills;
