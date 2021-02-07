import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import React from 'react';

import { themeDark, themeLight } from 'lib/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={themeLight ?? themeDark}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
