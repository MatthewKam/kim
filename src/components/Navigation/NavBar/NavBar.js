import React from 'react';
import './NavBar.scss';

export default function NavBar(props) {
  return (
    <div className={`NavBar${props.navBarClass ? ' '+ props.navBarClass:''}`}>
      {props.children}
    </div>
  );
}
