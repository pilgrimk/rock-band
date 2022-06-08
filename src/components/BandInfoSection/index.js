import React from 'react';
import {
  BandInfoContainer,
  BandInfoWrapper,
  BandInfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img
} from './BandInfoElements';

const BandInfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  img,
  alt,
  id,
  primary,
  darkText
}) => {
  console.log(primary);
  return (
    <>
      <BandInfoContainer lightBg={lightBg} id={id}>
        <BandInfoWrapper>
          <BandInfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </BandInfoRow>
        </BandInfoWrapper>
      </BandInfoContainer>
    </>
  );
};

export default BandInfoSection;
