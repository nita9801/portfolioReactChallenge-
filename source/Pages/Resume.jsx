import React from 'react';
import resumeFile from '../assets/resume.pdf'; // Import the resume file

const Resume = () => {
  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React']; // Add more skills here

  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href={resumeFile} download aria-label="Download my resume as a PDF">
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;