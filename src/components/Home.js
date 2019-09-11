import React from 'react';

import ProjectList from './ProjectList';
import CourseList from './CourseList';
import SkillList from './SkillList';

import styles from './styles';

export default function Home() {
  return (
    <div style={styles.content}>
      <ProjectList />
      <SkillList />
      <CourseList />
    </div>
  );
}
