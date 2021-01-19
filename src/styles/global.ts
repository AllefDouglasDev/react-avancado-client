import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* poppins-300 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/poppins-v15-latin-300.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/poppins-v15-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/poppins-v15-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/poppins-v15-latin-300.woff') format('woff'), /* Modern Browsers */
        url('/fonts/poppins-v15-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/poppins-v15-latin-300.svg#Poppins') format('svg'); /* Legacy iOS */
  }
  /* poppins-regular - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/poppins-v15-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/poppins-v15-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/poppins-v15-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/poppins-v15-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/poppins-v15-latin-regular.svg#Poppins') format('svg'); /* Legacy iOS */
  }
  /* poppins-600 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/poppins-v15-latin-600.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/poppins-v15-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/poppins-v15-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/poppins-v15-latin-600.woff') format('woff'), /* Modern Browsers */
        url('/fonts/poppins-v15-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/poppins-v15-latin-600.svg#Poppins') format('svg'); /* Legacy iOS */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
