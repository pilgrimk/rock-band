import React from 'react';
import Video from '../../videos/video1.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg
} from './HeroElements';

function HeroSection() {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
    </HeroContainer>
  );
}

export default HeroSection;
