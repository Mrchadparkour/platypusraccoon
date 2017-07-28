import React from 'react';
import GSAP from 'react-gsap-enhancer';
//<ul className="tree">
  // <li className="layer-3"></li>
  // <li className="layer-2"></li>
  // <li className="layer-1"></li>
  // <li className="trunk"></li>
  // </ul>

class GrassKnoll extends React.Component {
  render(){
    return(
        <div className="GrassKnoll"></div>
    );
  }
}
export default GSAP()(GrassKnoll);
