import '@emotion/react'

declare module '@emotion/react' {
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
      light: {
        text: string
        background: string
        elements: string
        input: string
        placeholder: string
      }
      dark: {
        text: string
        background: string
        elements: string
        input: string
        placeholder: string
      }
    }
    breakpoints: {
      mobile: string
      desktop: string
    }
  }
}
