import styled from 'styled-components';

export const IconBox = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.6rem;
  cursor: pointer;
`;

export const StyledP = styled.p`
  font-size: ${(props) => props.fs};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  line-height: 1.71;
  letter-spacing: -0.28px;
  color: ${(props) => props.theme.black1_color};
`;

export const FlexC = styled.div`
  display: flex;
  justify-content: ${(props) => props.justi};
  align-items: ${(props) => props.align};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`;

export const StyledTitle = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1;
  color: ${(props) => props.theme.black1_color};
`;
