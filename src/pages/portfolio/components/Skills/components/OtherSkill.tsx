import React from 'react';
import SkillIcon, { SkillIconProps } from './SkillIcon';
import styles from './style.module.less';

export const Git: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.git} {...props} />;
};

export const Docker: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.docker} {...props} />;
};

export const Kubernetes: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.kubernetes} {...props} />;
};

export const AWS: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.aws} {...props} />;
};

export const Tableau: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.tableau} {...props} />;
};

export const Openai: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.openai} {...props} />;
};

export const Selenium: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.selenium} {...props} />;
};