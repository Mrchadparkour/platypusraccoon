import React from 'react';
import GSAP from 'react-gsap-enhancer';

class Moon extends React.Component {

  render(){
    return(
        <div className="Moon">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
    );
  }
}
export default GSAP()(Moon);
