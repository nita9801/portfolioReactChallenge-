import React from 'react';
import Project from '../../src/pages/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: 'path/to/project1.jpg',
      deployedLink: 'https://deployedlink1.com',
      repoLink: 'https://github.com/yourusername/project1'
    },
    // Add more projects here
  ];
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      {projects.length > 0 ? (
        projects.map((project) => (
          <Project key={project.title} {...project} />
        ))
      ) : (
        <p>No projects to display.</p>
      )}
    </section>
  );
};
export default Portfolio;