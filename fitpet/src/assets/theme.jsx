const size = {
  mobile: '768px',
  tablet: '1200px',
};

// 임시로 세팅. 컬러, 로고 전달되면 바꾸기
const theme = {
  dark_grey: '#979797',
  light_grey: '#cbcbcb',
  text_grey: '#707070',
  main_white: '#ffffff',
  main_grey: '#f1f1f1',
  button_grey: '##979797',
  mobile: `(max-width:${size.mobile})`,
  tablet: `(max-width:${size.tablet})`,
};

export default theme;
