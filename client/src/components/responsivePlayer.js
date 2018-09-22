import React, {Component} from 'react';
import ReactPlayer from 'react-player';

class ResponsivePlayer extends Component {
  render () {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          playing url='https://www.youtube.com/watch?v=9kXyRkXyv-U'
          width='100%'
          height='100%'
          //playing={false}
        />
      </div>
    )
  }
}

export default ResponsivePlayer;