import styled from 'styled-components';

export const StepsBackdrop = styled.div`
  width: 100%;
  height: 100%;
  border: 1px var(--white) solid;
  padding: 100px 20px;
  color: var(--white);
  position: relative;
  overflow: hidden;
`;

export const StepBgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(60%);
`;

export const StepNumberBg = styled.img`
  position: absolute;
  right: -120px;
  top: 0;
  height: 100%;
  padding: 60px 0;
`;

export const StepsContent = styled.div`
  min-height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

export const StepsSocialsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 15px 0;
  & > * {
    width: 50px;
    margin: 0 10px;
  }

  & img {
    width: 100%;
  }
`;

export const StepsBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
