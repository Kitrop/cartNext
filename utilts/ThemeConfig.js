import { createGlobalStyle} from "styled-components"
import { ThemeProvider } from "styled-components";

export const lightTheme = {
    body: '#ccc',
    text: '#000000',
    background: '#fff'
}


export const darkTheme = {
    body: '#111111',
    text: '#fff',
    background: '#000000'
}


export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`