import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Collapsible from 'react-collapsible';

class Bio extends Component {

  renderHide() {
    return (
      <button className='title' style={{verticalAlign: 'center'}}><span>Hide</span></button>
    );
  }

  mmaStyle() {
    return(
      <button className='title' style={{verticalAlign: 'center'}}><span>MMA Career</span></button>
    );
  }

  renderMMA() {
    return(
      <div>
        <p>
            I had my first fight on April 20th 2010. I knew that night that I could take this game very far... so I went 
            all in. I completely devoted myself to traveling and training. After reaching the 9-0 amateur mark
            I was offered an opportunity to go to Alliance in Chula Vista, CA and train with Dominick Cruz to help get him ready for Scott Jorgensen in <a className='link' href='https://www.ufc.tv/video/dominick-cruz-vs-scott-jorgensen-wec-53'>Cruz-Jorgensen</a> .
            At this point in my career, I was the premier up and coming amateur. After winning all of them, I got to make my
            professional debut on Sharkfights. I was lucky enough to be invited back to Alliance to help <a className='link' href='https://www.sherdog.com/fighter/Dominick-Cruz-12107'>Dom</a> get ready for Urijah Faber
            in the Bantamweight UFC debut. Being exposed to the best in the business helped me to formulate a fighting style/system. I was able
            formulate a style-- or rather, mix of styles. Being given proper resistance is what self growth is all about, and without it one
            will develop a false sense of security. This is what the world of martial arts lacks-- practicality, adaptiveness, spontanaeity, flexibility. 
            This is precisely why I was drawn to this sport: all the garbage caked into the traditional fighting styles is eradicated here.
            The pure, raw, practicality of martial arts flourishes in this game.
        </p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Fade left>
          <div>
            <h2 style={{textAlign: 'center'}}>About Me:</h2>
            <br />
                <Collapsible 
                trigger = {this.mmaStyle()}
                triggerWhenOpen = {this.renderHide()}
                transitionTime = "500"
                >
                    {this.renderMMA()}
                </Collapsible>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Bio;