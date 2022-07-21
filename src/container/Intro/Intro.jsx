import React, { useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constants';
import './Intro.css';

const Intro = () => {

   const [playVideo, setPlayVideo] = React.useState(false);
   const vidRef = React.useRef();

   React.useEffect(() => {
      playVideo ? vidRef.current.play() : vidRef.current.pause()
   }, [playVideo]);

   return (
      <div className='app__video'>
         <video src={meal} type='video/mp4' loop controls={false} muted
            ref={vidRef}
         />
         <div className='app__video-overlay flex__center'>
            <div className='app__video-overlay_circle flex__center'
               onClick={() => setPlayVideo(!playVideo)}
            >
               {playVideo
                  ? <BsPauseFill color='#fff' fontSize={30} />
                  : <BsFillPlayFill color='#fff' fontSize={30} />
               }
            </div>
         </div>
      </div>)
};

export default Intro;