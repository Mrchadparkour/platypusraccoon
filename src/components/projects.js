import React from 'react';
import BrewTour from '../images/brewtour.png';


export default class Projects extends React.Component {
  render() {
    return(
      <div className="ProjectsFormat">
        <div className="Projects">
          <h1 className="ProjectTitle">Projects</h1>
          <div className="projectRow"><a href="https://brewtour-66745.firebaseapp.com" target="_blank" rel="noopener noreferrer"><img style={{'opacity': '2'}} alt="Link to BrewTour" src={BrewTour} /></a></div>
        </div>
      </div>
    );
  }
}
