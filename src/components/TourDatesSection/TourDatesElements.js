import styled from 'styled-components';

export const TourDatesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ab7b7b;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const TourDatesWrapper = styled.div`
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

export const TourDatesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;