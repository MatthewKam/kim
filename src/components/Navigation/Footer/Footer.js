import React from 'react';
import './Footer.scss';

export default function Footer(props) {
  return (
    <div className={`Footer${props.footerClass ? ' '+ props.footerClass:''}`}>
      {props.children}
    </div>
  );
}
