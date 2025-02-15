import React from 'react';
import SkillIcon, { SkillIconProps } from './SkillIcon';
import styles from './style.module.less';

export const ReactJS: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.reactjs} {...props} />;
};

export const Airflow: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.airflow} {...props} />;
};

export const Fastapi: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.fastapi} {...props} />;
};

export const Flask: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.flask} {...props} />;
};