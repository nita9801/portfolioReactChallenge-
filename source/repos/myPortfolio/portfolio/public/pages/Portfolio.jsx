import React from 'react';
import Project from '../components/Project';
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
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};
export default Portfolio;