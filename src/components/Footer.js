import React from 'react';
import Octocat from '../images/GitHub-Mark-Light-120px-plus.png';
import Email from '../images/email.png';
import Insta from '../images/instagram.png';
import LinkedIn from '../images/linkedin.png';


export default class WorkContent extends React.Component {
  render() {
    return(

      <div className="FooterFormat">

        <div className="Footer">
          <div><a href="https://github.com/Mrchadparkour" target="_blank" rel="noopener noreferrer"><img src={Octocat} alt="Github Link"/></a></div>
          <div><address><a href="mailto:cplattkuhn@gmail.com" rel="noopener noreferrer"><img style={{width: '6vw', height: '10vh'}} alt="Send Email" src={Email} /></a></address></div>
          <div><a href="https://www.linkedin.com/in/chadwickplatkuhn/" target="_blank" rel="noopener noreferrer"><img style={{width: '6vw', height: '10vh'}} alt="LinkedIn Link" src={LinkedIn} /></a></div>
          <div><a href="https://www.instagram.com/mrchadparkour/?hl=en" target="_blank" rel="noopener noreferrer"><img style={{width: '6vw', height: '10vh'}} alt="Instagram Link" src={Insta} /></a></div>
        </div>
      </div>
    );
  }
}
