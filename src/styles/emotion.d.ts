import '@emotion/react'

declare module '@emotion/react' {
  interface ColorScheme {
    text: string
    background: string
    elements: string
    input: string
    placeholder: string
    hover: string
  }

  export interface Theme {
    fonts: {
      body: string
      weight: {
        light: number
        regular: number
        semiBold: number
        bold: number
      }
    }
    colors: {
      light: ColorScheme
      dark: ColorScheme
    }
    breakpoints: {
      mobile: string
      desktop: string
    }
  }
}
