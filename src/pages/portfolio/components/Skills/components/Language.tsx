import React from 'react';
import SkillIcon, { SkillIconProps } from './SkillIcon';
import styles from './style.module.less';

export const Python: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.python} {...props} />;
};

export const SQL: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.sql} {...props} />;
};

export const Bash: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.bash} {...props} />;
};

export const Java: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.java} {...props} />;
};
