import styled, { css } from 'styled-components';

// section header에 있는 프로세스 상황 이미지
export const TrackContainer = styled.div`
  width: 63.6rem;
  position: relative;
  display: flex;
  margin: 0 auto;
`;

export const Track = styled.div`
  width: 31.8rem;
  border-bottom: solid 1px ${(props) => props.theme.main_color};

  ${(props) =>
    props.second &&
    css`
      border-bottom: solid 1px ${(props) => props.theme.grey2_color};
    `}

  ${(props) =>
    props.long &&
    css`
      width: 41.8rem;
    `}
  
  ${(props) =>
    props.short &&
    css`
      width: 21.5rem;
      border-bottom: solid 1px ${(props) => props.theme.grey2_color};
    `}
`;

export const CircleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -0.9rem;

  span {
    white-space: nowrap;
    font-size: 1.6rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    margin-top: 0.6rem;
    letter-spacing: -0.32px;
    text-align: left;
    color: #2a2a2a;
  }

  /* 동그라미가 세개만 있을 때 */
  ${(props) =>
    props.blue &&
    css`
      left: -3rem;
    `}

  ${(props) =>
    props.mint &&
    css`
      left: 24rem;
    `}


  ${(props) =>
    props.grey &&
    css`
      right: -3rem;
    `}

// 동그라미가 네개 일 때
  ${(props) =>
    props.blue &&
    props.middle &&
    css`
      left: 17.1rem;
    `}

  ${(props) =>
    props.mint &&
    props.middle &&
    css`
      left: 37.8rem;
    `}


  ${(props) =>
    props.grey &&
    css`
      right: -3rem;
    `}

  .circle {
    ${(props) =>
      props.blue &&
      css`
        background-color: ${props.theme.main_color};
      `}

    ${(props) =>
      props.mint &&
      css`
        background-color: ${props.theme.sub_color};
      `}


  ${(props) =>
      props.grey &&
      css`
        background-color: ${props.theme.grey2_color};
      `}
  }
`;

export const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;
