import React from 'react';
import NavBar from '../../Navigation/NavBar/NavBar';
import Footer from '../../Navigation/Footer/Footer';
import './Navigation.scss';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


export function WorkoutNavigation() {
  return (
    <div className="Workout-Navigation">
      <div className="content">
        <div className="Open-Navigation">
          <IconButton aria-label="open navigation"><i className="material-icons">foundation</i></IconButton>
        </div>
        <div className="Open-Home">
          <Button>
            <h1 className="Open-Home__title Open-Home__title-top">WORK</h1>
            <h1 className="Open-Home__title Open-Home__title-bottom">OUT</h1>
          </Button>
        </div>
        <div className="Open-Profile">
          <IconButton aria-label="open profile"><i className="material-icons">face</i></IconButton>
        </div>
      </div>
    </div>
  );
}

export function WorkoutFooter() {
  return (
    <div className="Workout-Footer">
      <IconButton aria-label="add new workout"><i className="material-icons">add_circle_outline</i></IconButton>
      <Button variant="contained" color="primary">
        Start Workout
      </Button>
      <IconButton aria-label="open workout queue"><i className="material-icons">playlist_play</i></IconButton>
    </div>
  );
}

export function StickyNavBar(){
  return(
    <NavBar navBarClass="Sticky-NavBar">
      <WorkoutNavigation/>
    </NavBar>
  );
}

export function StickyFooter() {
  return (
    <Footer footerClass="Sticky-Footer">
      <WorkoutFooter/>
    </Footer>
  );
}

export function Navigation(){
  return(
    <div className="Navigation">
      <StickyNavBar/>
      <StickyFooter/>
    </div>
  )
}

export default Navigation;