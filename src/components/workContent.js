import React from 'react';

export default class WorkContent extends React.Component {
  constructor() {
    super();
    this.state = {
      hello: ''
    };
  }

author(num) {
  const arr = ['I love to code.',"I love Parkour too.", "If you wanna see...", "Click the Insta Icon! :)", "But if you wanna code,", 'Shoot me a message!',"Let's work Together!"];
  setTimeout(() => {
    if (this.state.hello.length < 1) {
      this.typewriter(0, arr[num], false);
      num++;
    }
    if (num < arr.length) this.author(num);
  }, 500)
}

typewriter(num, phrase, deleting) {
  if (deleting) {
    setTimeout(() => {
      this.setState({hello: this.state.hello.substring(0, num -1)})
      num--;
      if (num > 0) this.typewriter(num, phrase, true)
    }, 50)
  }else {
    setTimeout(() => {
      this.setState({hello: this.state.hello + phrase[num]})
      num++;
      if (phrase === 'Let\'s Work Together!' && num >= phrase.length ) {
        return 'Animation Complete';
      } else {(num < phrase.length) ? this.typewriter(num, phrase, false) : setTimeout(() => this.typewriter(num, phrase, true), 2000) }
    }, (2 - Math.floor(Math.random() * 2)) * 100)
  }
}

componentDidMount() {
  this.author(0);
}
  render() {
    return(
        <div className="wrapper">
            <h1 className="workTitle">I'm Chadwick Platt-Kuhn.</h1>
            <h1 id="workTitle" className="workTitle blink">{this.state.hello}</h1>
        </div>
    );
  }
}
