import React from 'react';
import styles from './ProjectStyles.module.css'
import srms from '../../assets/srms.png';
import cms from '../../assets/cms.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
       <ProjectCard src={srms} link='https://github.com/soumya24-apr/Student-Result-Management-System' h3="Student Result Management System"
       p="College Management Software"
       />
       <ProjectCard src={cms} link='https://github.com/soumya24-apr/Student-Result-Management-System' h3="Conference Management System"
       p="Conference Management Software"
       />
        </div>
    </section>
  )
}

export default Projects;
