import Colors from '@/theme/constants/colors';
import Dimensions from '@/theme/constants/dimensions';

export default `
  @font-face {
    font-family: "Raleway-Regular";
    src: url("../assets/fonts/Raleway-Regularr.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Raleway-Black";
    src: url("../assets/fonts/Raleway-Black.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Raleway-Italic";
    src: url("../assets/fonts/Raleway-Italic.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat-Regular";
    src: url("../assets/fonts/Montserrat-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat-Bold";
    src: url("../assets/fonts/Montserrat-Bold.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat-Italic";
    src: url("../assets/fonts/Montserrat-Italic.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${Dimensions.fontSizes.regular}px !important;
    line-height: ${Dimensions.lineHeights.regular} !important;
  }

  body {
    width: 100%;
    background-color: ${Colors.brand.nearBlack};
    color: ${Colors.brand.offWhite};
    font-family: Montserrat-Regular;
  }

  a {
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${Colors.ui.light};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid ${Colors.ui.light};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-of-type(odd) {
        td {
          background-color: ${Colors.ui.whisper};
        }
        tr {
          background-color: ${Colors.ui.whisper};
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.414rem;
    margin-bottom: .5rem;
    color: ${Colors.brand.offWhite};
    font-weight: 900;
    font-family: Raleway-Black !important;
    line-height: ${Dimensions.lineHeights.heading};
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${Dimensions.headingSizes.h1}rem;
  }

  h2 {
    font-size: ${Dimensions.headingSizes.h2}rem;
  }

  h3 {
    font-size: ${Dimensions.headingSizes.h3}rem;
  }

  h4, h5, h6 {
    font-size: ${Dimensions.headingSizes.h4}rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: #000;
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${Colors.ui.light};
  }

  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid ${Colors.brand.drabGreen};
    color: ${Colors.brand.nearBlack};
    background-color: ${Colors.ui.light};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

// @media (min-width: ${Mixins.getEmSize(breakpoints.tablet)}em) {
//   padding-right: 5rem;
//   padding-left: 1.25rem;
// }
