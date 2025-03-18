import React from 'react';
import PropTypes from 'prop-types';


const AboutMe = ({ photo, name, bio }) => {
  return (
    <section>
      <h2>About Me</h2>
      <img src={photo} alt={name} />
      <p>{bio}</p>
    </section>
  );
};

AboutMe.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default AboutMe;