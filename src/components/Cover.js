import React from 'react';
import {
  faCuttlefish, faHtml5, faCss3Alt, faSquareJs, faPython, faReact, faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfilePicture from '../assets/profile_picture.jpeg';
import { Stacks } from './data';
import './styles/Cover.css';

const Cover = () => {
  const stackIcons = [
    faReact, faCss3Alt, faHtml5, faSquareJs, faReact, faPython, faCuttlefish, faGitAlt,
  ];
  const stackList = Stacks.map((stack) => (
    <span
      key={stack.id}
      className={stack.className[0]}
    >
      <FontAwesomeIcon
        className={stack.className[1]}
        icon={stackIcons[stack.id - 1]}
      />
      { stack.name }
    </span>
  ));
  return (
    <section
      className="cover"
      id="cover"
    >
      <div className="info-container">
        <h1 className="hello">
          👋 Hi, I’m Praises
        </h1>
        <p className="summary">
          I&apos;m a Full-Stack Software Developer located in Nigeria.
          I have great passion for UI creation, effect,
          animation and dynamic user experiences.
          <br />
          <br />
          I try to keep up with security and best practices,
          and am always looking for new things to learn and new opportunities.
        </p>
        <p className="see-project">
          👇 Check out some of my projects
        </p>
      </div>
      <div className="info-display">
        <div className="info-wrapper">
          <div className="picture-container">
            <img
              className="profile-image"
              src={ProfilePicture}
              alt="Praises Tula"
            />
            <span className="title">
              FULL STACK
              <br />
              DEVELOPER
            </span>
          </div>
          <span className="name">Praises Tula</span>
          <span className="location">Nigeria</span>
        </div>
        { stackList }
      </div>
    </section>
  );
};

export default Cover;
