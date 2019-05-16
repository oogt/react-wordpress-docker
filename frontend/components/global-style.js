import { createGlobalStyle } from 'styled-components';

export const transitionName = 'fade';
export const transitionDuration = 500;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Josefin Slab', serif;
    font-size: 24px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Work Sans", sans-serif;
  }

  a {
    text-decoration: none;
  }

  .${transitionName}-enter {
    opacity: 0;
    transform: translateY(1em);
  }

  .${transitionName}-enter.${transitionName}-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all ${transitionDuration}ms;
  }

  .${transitionName}-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .${transitionName}-exit.${transitionName}-exit-active {
    opacity: 0;
    transform: translateY(1em);
    transition: all ${transitionDuration}ms;
  }
`;

export default GlobalStyle;
