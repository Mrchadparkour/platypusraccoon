import React from 'react';
import {TweenMax} from 'gsap';
import GSAP from 'react-gsap-enhancer';
import Moon from './moon';
// import GrassKnoll from './grassKnoll';
import Footer from './Footer';
import WorkContent from './workContent';
import Projects from './projects';

class WebDev extends React.Component {
spawnStars() {
  const starSize = ['tall', 'grande', 'venti'];
  const starSpeed = ['slow', 'medium', 'fast'];
  let starArr = [];
  for (let i = 0; i < 500; i ++) {
    let size = Math.floor(Math.random() *  3);
    let speed =  Math.floor(Math.random() *  3);
    starArr.push(<div key={i} id={'star' + i} className={starSize[size] + 'star '+ starSpeed[speed]}></div> );
  }
  return starArr;
}
componentDidMount() {
  const rando = (num) => Math.floor(Math.random() * num);
  this.spawnStars().forEach((star, i) => {
    TweenMax.to('#' + star.props.id, 0, { x: rando(window.innerWidth), y: rando(window.innerHeight / 2), opacity: 1});
  });

}

  render() {
    return(

      <div className="WebDevPanel">
      <Moon />
      <WorkContent />
      <Projects />
      <Footer />
        <div className="StarBox">
          {this.spawnStars()}
        </div>
      </div>
    );
  }
}

export default GSAP()(WebDev);
