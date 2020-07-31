import React from 'react';
import './Resume.scss';
import { Profile, JobExperience, SideNotes } from './ResumeBuilder';

export default function Resume() {
  const printResume = () => {
    window.print();
  }

  return (
    <div className="Resume">
      <div className="print" onClick={printResume}><i className="material-icons">print</i></div>
      <Profile/>
      <JobExperience/>
      <SideNotes/>
    </div> 
  );
}
