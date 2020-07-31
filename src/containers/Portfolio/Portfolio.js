import React from 'react';
import './Portfolio.scss';
import Projects from '../../components/Projects/Projects';
// import Resume from '../../components/Resume/Resume';

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <Projects/>
      {/* <Resume/> */}
    </div>
  );
}
