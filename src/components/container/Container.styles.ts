/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
import styled from '@emotion/styled';
import Mixins from '@/theme/utils/Mixins.utils';

const AppContainer = styled.div`
  &.app-container {
    ${(props: any): string => props.theme.utils.mixins.padY(20)};
    ${(props: any): string => props.theme.utils.mixins.padX(20)};

    margin: 0 auto;

    .heading-container {
      margin-bottom: 12px;
      h1,
      span {
        margin-bottom: 0;
        text-align: center;
      }

      span {
        display: block;
        font-size: 1.2rem;
      }
    }
    .footing-container {
      margin-top: 12px;
      text-align: center;
    }

    img {
      &.cover-image {
        display: block;
        margin: 0 auto;
        /* box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.5); */
        /* box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2); */
        /* ${Mixins.getStyledBorder(8, '#000000')} */
      }

      &.chicago-flag {
        display: inline-block;
        position: relative;
        top: 2px;
        height: 18px;
        margin-left: 8px;
        margin-bottom: 0;
      }
    }

    svg {
      margin-left: 8px;
      position: relative;
      top: 2px;
    }

    &.desktop-container {
      h1 {
        font-size: 3em;
      }
      width: 60%;
    }

    &.mobile.container {
      width: auto;
    }
  }
`;

export default { AppContainer };
