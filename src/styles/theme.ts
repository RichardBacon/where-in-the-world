const theme = {
  fonts: {
    body: "'Nunito Sans', sans-serif",
    weight: {
      light: 300,
      regular: 400,
      semiBold: 600,
      bold: 800,
    },
  },
  colors: {
    light: {
      text: 'hsl(200, 15%, 8%)',
      background: 'hsl(0, 0%, 98%)',
      elements: 'hsl(0, 0%, 100%)',
      input: 'hsl(0, 0%, 45%)',
      placeholder: 'hsl(0, 0%, 52%)',
      hover: 'hsl(0, 0%, 90%)',
    },
    dark: {
      text: 'hsl(0, 0%, 100%)',
      background: 'hsl(207, 26%, 17%)',
      elements: 'hsl(209, 23%, 22%)',
      input: 'hsl(0, 0%, 100%)',
      placeholder: 'hsl(0, 0%, 70%)',
      hover: 'hsl(209, 23%, 25%)',
    },
  },
  breakpoints: {
    mobile: '375px',
    desktop: '1440px',
  },
}

export default theme
