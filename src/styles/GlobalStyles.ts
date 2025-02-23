import { css } from '@emotion/react'

const GlobalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    min-height: 100dvh;
    line-height: 1.5;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  *:disabled {
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
    outline-offset: 2px;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid currentColor;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
`

export default GlobalStyles
