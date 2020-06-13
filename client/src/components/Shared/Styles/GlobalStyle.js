import React, { useContext } from 'react';

import { createGlobalStyle } from 'styled-components';
import { DarkTheme } from './DarkTheme';
import { LightTheme } from './LightTheme';
import { ThemeContext } from '../../../context/ThemeContext';

const GlobalTheme = () => {

    const { dark } = useContext(ThemeContext)

    const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: ${ dark.isDarkMode ? DarkTheme.gunmetal : LightTheme.lightcream };
  }
  .logo-text-TEMPORARY {
    color: ${ dark.isDarkMode ? DarkTheme.lightgray : LightTheme.black};
  }
  .header-text {
    color: ${ dark.isDarkMode ? DarkTheme.agua : LightTheme.agua };
  }
  .tour-btn {
    /* Tour button has two color sets. */
    background-color: ${ dark.isDarkMode ? DarkTheme.tourbtn : LightTheme.lightgray};
    &:hover {
      background-color: ${ dark.isDarkMode ? DarkTheme.mediumgray : LightTheme.tourbtnhover }
    }
  }
  .subhead-text {
    color: ${ dark.isDarkMode ? DarkTheme.lightgray : LightTheme.darkgray };
  }
`;

}

export default GlobalTheme;