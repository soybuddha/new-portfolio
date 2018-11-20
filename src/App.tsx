import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import logo from './images/logo.svg';

export class AppWrapper extends React.Component {
  public render() {
    const logoSpin = keyframes`
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    `;

    const App = styled.div`
      font-family: sans-serif;
      text-align: center;
    `;

    const AppHeader = styled.header`
      background-color: #222;
      height: 150px;
      padding: 20px;
      color: white;
    `;

    const AppLogo = styled.img`
      animation: ${logoSpin} infinite 20s linear;
      height: 80px;
    `;

    const AppTitle = styled.h1`
      font-size: 1.5em;
    `;

    const AppIntro = styled.p`
      font-size: large;
    `;


    return (
      <App>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </AppIntro>
      </App>
    );
  }
}
