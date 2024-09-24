import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-image: url('https://w0.peakpx.com/wallpaper/679/179/HD-wallpaper-old-paper-texture-brown-paper-texture-paper-background-light-brown-paper.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  input {
    background-color: transparent;
  }
`;

export default GlobalStyle;
