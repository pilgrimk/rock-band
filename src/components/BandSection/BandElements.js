import styled from 'styled-components';

export const BandContainer = styled.div`
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #880a05;
  padding: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const BandWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const BandH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;